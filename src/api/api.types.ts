import { AxiosRequestConfig } from 'axios';

import type { Movies } from 'reduxApp/movies/movies.types';

type EmptyObject = {
  [key: string]: never;
};
export interface ICallApiOptions {
  params: {
    language: string;
    sort_by: string;
    page: string;
    year: string;
  };
  body?: any; // TODO
}

export type CallApiType = ICallApiOptions | EmptyObject | AxiosRequestConfig;
export interface IResponseData {
  page: number;
  results: Movies;
  total_pages: number;
  total_results: number;
}
