import { useEffect, useState } from "react";
const cache = {};
const pendingRequests = {};

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const refetch = async () => {
    const cachedData = cache[url];
    const now = Date.now();

    if (cachedData && now - cachedData.timestamp < 4000) {
      setData(cachedData.data);
      setLoading(false);
      return;
    }

    if (pendingRequests[url]) {
      const result = await pendingRequests[url];
      setData(result);
      setLoading(false);
      return;
    }

    pendingRequests[url] = new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          cache[url] = { data: result, timestamp: Date.now() };
          resolve(result);
        })
        .catch((err) => {
          setError(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
          delete pendingRequests[url];
        });
    });

    const result = await pendingRequests[url];
    setData(result);
  };

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, error, loading, refetch };
}

export default useFetch;
