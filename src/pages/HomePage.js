import React from "react";
import Calendar from "../components/Calendar";
import UsersLoader from "../components/UsersLoader";

const HomePage = () => {
  return (
    <div>
      <Calendar />
      <UsersLoader />
    </div>
  );
};

export default HomePage;
