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

// interface IFetchApiOptions {
//   mode: string;
//   headers: { [key: string]: string };
//   body?: string;
// }

// type FetchApiType = IFetchApiOptions | AxiosRequestConfig | EmptyObject;

export interface IResponseData {
  page: number;
  results: Movies;
  total_pages: number;
  total_results: number;
}

// export const fetchApi = (url: string, options: FetchApiType = {}): any => {
//   return new Promise((resolve, reject) => {
//     axios(url, options)
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((response) => {
//         response.json().then((error) => {
//           reject(error);
//         });
//       });
//   });
// };

//  get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
//   return this.api.get(url, config);
// }
