import { useEffect, useState } from 'react';

const useFetchGeneric = (url) => { 
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          throw Error(`Could not fetch the data from ${url} (Status: ${res.status}).`);
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
        }
      })
      .finally(() => {
        setIsPending(false);
      });

    return () => abortCont.abort();

  }, [url]);

  return { data, isPending, error };
};

export default useFetchGeneric;