import React from 'react'
import makeRequest from '../makeRequest'

const useFetch = (url) => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
            //setError(false);
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
};

export default useFetch;
