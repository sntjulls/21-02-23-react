import React from "react";
import Spinner from "../Spinner";
import Error from "../Error";
import { getJsonUsers } from "../../api";
import useData from "../../hooks/useData";

const FuncUsersList = () => {
  const { data, error, isPanding } = useData(getJsonUsers);

  if (isPanding) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ol>
      {data.map(({id, name}) => (
        <li key={id}>{name}</li>
      ))}
    </ol>
  );
};

export default FuncUsersList;
