import React from 'react';

import { Button } from 'components/Buttons/Button';

import './Pagination.styles.scss';

interface IPagination {
  page: number;
  resetFilters: () => void;
  total_pages: number | null;
  onChangePagination: ({ page, total_pages }: IPagesData) => void;
}

interface IPagesData {
  page: number;
  total_pages: number | null;
}

export const Pagination: React.FC<IPagination> = (props) => {
  const { page, resetFilters, total_pages, onChangePagination } = props;

  const nextPage = (step: number) => () => {
    onChangePagination({
      page: page + step,
      total_pages: total_pages,
    });
  };

  const prevPage = (step: number) => () => {
    onChangePagination({
      page: page - step,
      total_pages: total_pages,
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
