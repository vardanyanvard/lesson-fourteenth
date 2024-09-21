import React from "react";
import useFetch from "../useFetch";
import { API_URL } from "../App";

function ChildOne() {
  const { data, error, loading, refetch } = useFetch(`${API_URL}products`);

  return (
    <>
      <h2>Child One</h2>
      {loading && <p>loading..</p>}
      {data && <p>{data.length}</p>}
      <button onClick={refetch}>refetch</button>
      <p>------------------------------------------------------------</p>
    </>
  );
}

export default ChildOne;
