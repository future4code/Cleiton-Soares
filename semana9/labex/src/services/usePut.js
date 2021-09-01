import { useState } from "react";
import axios from "axios";

export const usePut = (finalUrl, header) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");

  const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/cleiton-lovelace/trips/`

  const put = (body) => {
    axios
      .put(`${baseUrl}${finalUrl}`, body, header)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return {data, error, put};
};