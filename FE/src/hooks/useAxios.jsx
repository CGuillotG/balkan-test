import { useCallback, useState } from 'react';
import axios from 'axios';

export const useAxios = (setData) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiRequest = useCallback(
    async (url) => {
      try {
        setLoading(true);
        setError(null)
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    ,[setData])

  return { apiRequest, error, loading };
};