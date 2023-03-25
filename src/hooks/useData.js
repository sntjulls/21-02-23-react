import { useState, useEffect } from "react";

function useData(getJsonData) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPanding, setIsPanding] = useState(false);

  useEffect(() => {
    setIsPanding(true);
    getJsonData()
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsPanding(false));
  }, [getJsonData]);

  return {
    data,
    error,
    isPanding
  }
}

export default useData;
