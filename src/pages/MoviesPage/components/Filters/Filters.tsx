import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SortBy } from './components/SortBy';
import { Pagination } from './components/Pagination';
import { Genres } from './components/Genres';
import { Years } from './components/Years';

import { RootStateType } from 'reduxApp/rootReducer';
import {
  changeFiltersAction,
  changePaginationAction,
  resetFiltersAction,
} from 'reduxApp/filters';
import * as types from 'reduxApp/filters';

export const Filters: React.FC = () => {
  const filters = useSelector((state: RootStateType) => state.filters);
  const { sort_by, year } = filters;

  const dispatch = useDispatch();

  const onChangeFilters = (
    event:
      | React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
      | types.ITarget
  ) => {
    const { name, value } = event.target;
    dispatch(changeFiltersAction({ [name]: value }));
  };

  const onChangePagination = ({ page }: types.IPagesData) => {
    dispatch(
      changePaginationAction({
        page,
      })
    );
  };

  const resetFilters = () => {
    dispatch(resetFiltersAction());
  };

  return (
    <form className="mb-3">
      <SortBy sort_by={sort_by} onChangeFilters={onChangeFilters} />

      <Years year={year} onChangeFilters={onChangeFilters} />

      <Genres onChangeFilters={onChangeFilters} />

      <Pagination
        onChangePagination={onChangePagination}
        resetFilters={resetFilters}
      />
    </form>
  );
};
