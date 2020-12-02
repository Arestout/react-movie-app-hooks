import queryString from 'query-string';
import axios from 'axios';

import * as types from './api.types';

export const API_URL = 'https://api.themoviedb.org/3';

export const API_KEY_3 = 'b3999c3f3a12db3d3325f190c7a5e44f';

export const API_KEY_4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzk5OWMzZjNhMTJkYjNkMzMyNWYxOTBjN2E1ZTQ0ZiIsInN1YiI6IjVlN2EzN2U3ZDE4YjI0MDAxMzgzZDg0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CrF1NezmlzCAuEat5miZeA54Fo8okUDQPazc9-u6UHI';

// export const api = {
//   get: async (url: string, options: types.CallApiType = {}): Promise<any> => {
//     const { params = {} } = options;
//     const queryStringParams = {
//       api_key: API_KEY_3,
//       ...params,
//     };

//     try {
//       const response = await axios(
//         `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
//         {
//           // mode: 'cors',
//           headers: {
//             'Content-type': 'application/json',
//           },
//         }
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   },
// };

export class CallApi {
  static async get<T = any>(
    url: string,
    options: types.CallApiType = {}
  ): Promise<T> {
    const { params = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params,
    };

    try {
      const response = await axios(
        `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
        {
          // mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }

    // static get(url: string, options: CallApiType = {}): IResponseData {
    //   const { params = {} } = options;
    //   const queryStringParams = {
    //     api_key: API_KEY_3,
    //     ...params,
    //   };

    //   return fetchApi(
    //     `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
    //     {
    //       mode: 'cors',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //     }
    //   );
    // }

    // static post(url: string, options: CallApiType = {}): unknown {
    //   const { params = {}, body = {} } = options;
    //   const queryStringParams = {
    //     api_key: API_KEY_3,
    //     ...params,
    //   };

    //   return fetchApi(
    //     `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
    //     {
    //       method: 'POST',
    //       mode: 'cors',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify(body),
    //     }
    //   );
    // }

    // static delete(url: string, options: CallApiType = {}): unknown {
    //   const { params = {}, body = {} } = options;
    //   const queryStringParams = {
    //     api_key: API_KEY_3,
    //     ...params,
    //   };

    //   return fetchApi(
    //     `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
    //     {
    //       method: 'DELETE',
    //       mode: 'cors',
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       body: JSON.stringify(body),
    //     }
    //   );
  }
}

// static async get<T = any, R = AxiosResponse<T>>(
//   url: string,
//   options: types.CallApiType = {}
// ): Promise<R> {
