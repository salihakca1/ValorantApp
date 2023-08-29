import { useEffect, useState } from "react";
import axios from 'axios';

function UseFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data); 
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
    
  return { error, loading, data };
}

export default UseFetch;