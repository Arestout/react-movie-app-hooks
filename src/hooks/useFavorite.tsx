import { useState } from 'react';

import { CallApi } from 'api/api';
import { useAuth } from './useAuth';
import { IMovie } from 'reduxApp/movies/movies.types';

interface IUseWatchList {
  isLoadingFavorite: boolean;
  handleClickFavorite: () => void;
  isFavorite: () => boolean;
}

export const useFavorite = (movie: IMovie): IUseWatchList => {
  const [isLoadingFavorite, setIsLoading] = useState(false);
  const { auth, dispatchFetchFavoriteMovies, dispatchLoginModal } = useAuth();

  const isFavorite = () =>
    auth.favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie?.id);

  const toggleFavorites = async () => {
    const queryStringParams = {
      media_type: 'movie',
      media_id: movie.id,
      favorite: !isFavorite(),
    };

    try {
      setIsLoading(true);
      await CallApi.post(`/account/${auth.user.id}/favorite`, {
        params: {
          session_id: auth.session_id,
        },
        body: queryStringParams,
      });
      dispatchFetchFavoriteMovies({
        session_id: auth.session_id,
        user: auth.user,
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleClickFavorite = () => {
    if (auth.session_id) {
      movie && toggleFavorites();
    } else {
      dispatchLoginModal();
    }
  };

  return { isLoadingFavorite, handleClickFavorite, isFavorite };
};
