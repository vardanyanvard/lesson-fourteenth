import React from "react";
import useFetch from "../useFetch";
import { API_URL } from "../App";

function ChildTwo() {
  const { data, error, loading, refetch } = useFetch(`${API_URL}products`);

  return (
    <div>
      <h2>ChildTwo</h2>
      {loading && <p>Loading...</p>}
      {data && <p>{data.length}</p>}
      <button onClick={refetch}>refetch</button>
      <p>------------------------------------------------------------</p>
    </div>
  );
}

export default ChildTwo;
