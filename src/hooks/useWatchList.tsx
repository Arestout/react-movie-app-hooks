import { useState } from 'react';

import { CallApi } from 'api/api';
import { useAuth } from './useAuth';
import { IMovie } from 'reduxApp/movies/movies.types';

interface IUseWatchList {
  isLoadingWatchList: boolean;
  handleClickWatchList: () => void;
  isInWatchList: () => boolean;
}

export const useWatchList = (movie: IMovie): IUseWatchList => {
  const [isLoadingWatchList, setIsLoading] = useState(false);
  const { auth, dispatchFetchWatchListMovies, dispatchLoginModal } = useAuth();

  const isInWatchList = () =>
    auth.watchListMovies.some(
      (watchListMovie) => watchListMovie.id === movie?.id
    );

  const toggleWatchListMovies = async () => {
    const queryStringParams = {
      media_type: 'movie',
      media_id: movie.id,
      watchlist: !isInWatchList(),
    };

    setIsLoading(true);
    await CallApi.post(`/account/${auth?.user?.id}/watchlist`, {
      params: {
        session_id: auth.session_id,
      },
      body: queryStringParams,
    });
    dispatchFetchWatchListMovies({
      session_id: auth.session_id,
      user: auth.user,
    });
    setIsLoading(false);
  };

  const handleClickWatchList = () => {
    if (auth.session_id) {
      movie && toggleWatchListMovies();
    } else {
      dispatchLoginModal();
    }
  };

  return { isLoadingWatchList, handleClickWatchList, isInWatchList };
};
