import React from "react";
import LoaderData from "../components/LoaderData";
import { getJsonUsers, getJsonPhones } from "../api";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

const LoaderPage = (props) => {
  const mapPhones = ({ id, title, price }) => (
    <li key={id}>
      {title} - {price}uah
    </li>
  );
  const mapUsers = ({ id, name }) => <li key={id}>{name}</li>;
  const renderUsers = (state) => {
    const { data, isPending, error } = state;
    return (
      <section>
        {isPending && <Spinner />}
        {error && <Error />}
        {data.length > 0 && <ol>{data.map(mapUsers)}</ol>}
      </section>
    );
  };
  const renderPhones = (state) => {
    const { data, error, isPending } = state;
    return (
      <section>
        {isPending && <Spinner />}
        {error && <Error />}
        {data.length > 0 && <ol>{data.map(mapPhones)}</ol>}
      </section>
    );
  };
  return (
    <div>
      <LoaderData loadData={getJsonUsers}>{renderUsers}</LoaderData>
      <LoaderData loadData={getJsonPhones}>{renderPhones}</LoaderData>
    </div>
  );
};

export default LoaderPage;
