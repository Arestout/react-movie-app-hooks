import { useState, useEffect, useCallback } from 'react';
import { CallApi } from 'api/';

interface IUseFetch {
  isLoading: boolean;
  response: unknown;
  error: string;
  doFetch: () => void;
}

export const useFetch = (url: string): IUseFetch => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
    };

    CallApi.get(url, requestOptions)
      .then((res) => {
        setResponse(res);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(setIsLoading(false));
  }, [isLoading, options, url]);

  return { isLoading, response, error, doFetch };
};
