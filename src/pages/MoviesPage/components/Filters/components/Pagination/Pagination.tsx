import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'components/Buttons/Button';

import './Pagination.styles.scss';
import { RootStateType } from 'reduxApp/rootReducer';

interface IPagesData {
  page: number;
}
interface IPagination {
  resetFilters: () => void;
  onChangePagination: ({ page }: IPagesData) => void;
}

export const Pagination: React.FC<IPagination> = (props) => {
  const { resetFilters, onChangePagination } = props;
  const total_pages = useSelector(
    (state: RootStateType) => state.movies.total_pages
  );
  const page = useSelector((state: RootStateType) => state.filters.page);

  const nextPage = (step: number) => () => {
    onChangePagination({
      page: page + step,
    });
  };

  const prevPage = (step: number) => () => {
    onChangePagination({
      page: page - step,
    });
  };

  return (
    <>
      <div className="mb-4 row justify-content-around">
        <Button
          className="pagination__button mr-4"
          disabled={page === 1}
          onClick={prevPage(1)}
          label="Previous"
        />

        <Button
          className="pagination__button mr-4"
          disabled={page === total_pages}
          onClick={nextPage(1)}
          label="Next"
        />

        <Button
          className="pagination__button"
          onClick={resetFilters}
          label="Reset"
        />
      </div>
      <div className="row justify-content-md-center">
        <div className="col-4">
          {page} of {total_pages}
        </div>
      </div>
    </>
  );
};
