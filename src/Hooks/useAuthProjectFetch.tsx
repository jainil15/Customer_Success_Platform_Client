import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useAuthProjectFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const token = await getAccessTokenSilently();
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const res = await axios.get(url, config);
        setData(res.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useAuthProjectFetch;
