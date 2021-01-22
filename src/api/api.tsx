import queryString from 'query-string';
import axios from 'axios';

import * as types from './api.types';
import { API_URL, API_KEY_3 } from 'config';

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
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async delete<T = any>(
    url: string,
    options: types.CallApiType = {}
  ): Promise<T> {
    const { params = {}, body = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params,
    };

    try {
      const response = await axios(
        `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
          data: JSON.stringify(body),
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async post(url: string, options: any = {}): Promise<unknown> {
    const { params = {}, body = {} } = options;
    const queryStringParams = {
      api_key: API_KEY_3,
      ...params,
    };

    try {
      const response = await axios(
        `${API_URL}${url}?${queryString.stringify(queryStringParams)}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          data: JSON.stringify(body),
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
