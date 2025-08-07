import { useState, useEffect } from 'react';

const useFetchGeneric = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const res = await fetch(url, { signal: abortCont.signal });
                if (!res.ok) {
                    throw Error(`Could not fetch the data from ${url} (Status: ${res.status}).`);
                }
                const data = await res.json();
                setData(data);
                setError(null);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                }
            } finally {
                setIsPending(false);
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
};


// This is the main hook for your Home component, which now uses the generic hook.
const useFetch = () => {
    // Replace the URL below with the actual URL of your deployed backend API
    const API_BASE_URL = 'https://portfolio-api-g4dn.onrender.com'; 

    // Use the generic hook to fetch data for software projects
    const { data: softwareDev, isPending: isSoftwarePending, error: softwareError } = useFetchGeneric(`${API_BASE_URL}/softwareDev`);

    // Use the generic hook to fetch data for visual arts projects
    const { data: visualArts, isPending: isVisualPending, error: visualArtsError } = useFetchGeneric(`${API_BASE_URL}/visualArts`);

    // Combine the pending states and error messages
    const isPending = isSoftwarePending || isVisualPending;
    const error = softwareError || visualArtsError;

    return { softwareDev, visualArts, isPending, error };

};

export default useFetch;
