import { useEffect, useState } from "react";


type Data<T> = T | null;
type ErrorType = string | null;


interface Params<T> {
  data: T | null;
  loading: boolean;
  error: ErrorType | null;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);


useEffect(() => {
  const controler = new AbortController();

  const fetchData = async function() {
    try {
      const response = await fetch(url, controler);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData: T = await response.json();
      setData(jsonData);
      setError(null);
    } catch (error) {
      setError(error as ErrorType);
      
    } finally {
      setLoading(false);
    }
  }
  fetchData();

  return () => controler.abort();
  
}, [url]);
return { data, loading, error };
}



