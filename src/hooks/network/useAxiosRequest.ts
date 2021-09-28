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
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const processRequest = async (options: UseAxiosRequestInterface) => {
    setLoading(true);
    const { method, endpoint, payload } = options;
    const promise = axiosInstance[method](endpoint, payload);
    const [res] = await refTryRefactor(promise);

    if (res) {
      setLoading(false);
      setData(res.data);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {}, [loading, data, error]);

  return { processRequest, data, loading, error };
}
