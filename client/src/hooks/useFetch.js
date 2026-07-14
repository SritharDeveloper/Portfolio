import { useState, useEffect } from "react";

const useFetch = (fetchFn) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Calling API...");

        const res = await fetchFn();

        console.log("Full API Response:", res);
        console.log("API Data:", res.data);
        console.log("Response Status:", res.status);
        console.log(
          "Content Type:",
          res.headers["content-type"]
        );

        if (isMounted) {
          setData(res.data);
        }
      } catch (err) {
        console.error("API FETCH ERROR:", err);
        console.error("Error Response:", err.response);
        console.error("Error Data:", err.response?.data);
        console.error("Request URL:", err.config?.url);
        console.error("Base URL:", err.config?.baseURL);

        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [fetchFn]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
