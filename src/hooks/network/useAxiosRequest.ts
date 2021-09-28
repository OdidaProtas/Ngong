import { useEffect, useState } from "react";
import refTryRefactor from "../../constants/refTryRefractor";
import { axiosInstance } from "../../state";

export interface UseAxiosRequestInterface {
  context: string;
  method: "post" | "patch" | "get" | "put" | "delete";
  endpoint: string;
  isAuthenticated: boolean;
  payload?: any;
}

export default function useAxiosRequest() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const processRequest = async (options: UseAxiosRequestInterface) => {
    setLoading(true);
    const { method, endpoint, payload } = options;
    const promise = axiosInstance[method](endpoint, payload);
    const [res, err] = await refTryRefactor(promise);
    setError(err ? true : false);
    setData(res ? res.data : null);
    setLoading(false);
  };
  useEffect(() => {
    return () => {
      setError(false);
      setData(null);
      setLoading(false);
    };
  }, [loading, data, error]);
  return { processRequest, data, loading, error };
}
