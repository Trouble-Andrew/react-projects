import { Json } from 'interfaces';
import { useState, useCallback } from 'react';

interface RequestConfig {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Headers;
  body?: Body;
}

function useHttp(
  requestConfig: RequestConfig,
  applyData: (arg: Json[]) => void,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong!');
        return err.message;
      }
    }
    setIsLoading(false);
  }, [requestConfig, applyData]);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
