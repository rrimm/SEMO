import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { API_PATH } from "../../constants/path";

import Loading from "../../components/Loading";
import Detail from "../../components/Details";

function Details() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const param = useParams();

  const getDataRequest = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`${API_PATH.PRODUCT.BASE}/${param.id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [param]);

  useEffect(() => {
    getDataRequest();
  }, [getDataRequest]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Detail data={data} />
    </div>
  );
}

export default Details;
