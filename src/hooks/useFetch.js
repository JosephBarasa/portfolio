import { useState, useEffect } from 'react';

const useFetch = () => {
    const [softwareDev, setSoftwareDev] = useState(null);
    const [visualArts, setVisualArts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); //for cleanup during unmount

        const fetchAllData = async () => {
            try {
                //Promise.all to initiate both fetches concurrently
                const [softwareDevRes, visualArtsRes] = await Promise.all([
                    fetch('http://localhost:8000/softwareDev', { signal: abortCont.signal }),
                    fetch('http://localhost:8000/visualArts', { signal: abortCont.signal })
                ]);

                //check for specific fetch errors for softwareDev projects
                if (!softwareDevRes.ok) {
                    throw Error('Sofware Development : Could not fetch data (Status : ${softwareRes.status}).');
                }
                const softwareData = await softwareDevRes.json();

                //check for specific fetch errors for visualArts projects
                if (!visualArtsRes.ok) {
                    throw Error('Visual Arts : Could not fetch data (Status : ${visualArtsRes.status}).');
                }
                const visualArtsData = await visualArtsRes.json();

                //set states after successful fetches
                setSoftwareDev(softwareData);
                setVisualArts(visualArtsData);
                setError(null); // clear previous errors if successful
            } catch (err) {
                //handle abort error
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setError(err.message);
                    console.error("Failed to fetch project data:", err);
                }
            } finally {
                //always set isPending to false once fetching is done
                setIsPending(false);
            }
        };

        fetchAllData(); // execute the aync fetch function

        //cleanup func: aborts the fetch request if the component unmouts
        return () => abortCont.abort();
    }, []);

    return { softwareDev, visualArts, isPending, error };

};

export default useFetch;