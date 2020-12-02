import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchGenres } from 'reduxApp/filters';
import { RootStateType } from 'reduxApp/rootReducer';
import { IFiltersState } from 'reduxApp/filters';

interface IGenre {
  id: number;
  name: string;
}

interface ReturnType {
  genres: Array<IGenre>;
}

export const useFetchGenres = (): ReturnType => {
  const dispatch = useDispatch();
  const { genres } = useSelector<RootStateType, IFiltersState>(
    (state: RootStateType) => state.filters,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return {
    genres,
  };
};
