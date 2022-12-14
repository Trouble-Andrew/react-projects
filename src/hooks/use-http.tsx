import { useState, useCallback } from 'react';

type RequestConfig = Pick<Request, 'url' | 'method' | 'headers'>;
interface RequestWithOwnBody extends RequestConfig {
  body: Record<string, string> | null;
}

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (
      requestConfig: RequestWithOwnBody,
      applyData: (...args: any) => void,
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        console.log(response);

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
    },
    [],
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
