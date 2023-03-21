import React from "react";
import Calendar from "../components/Calendar";
import UserProfile from "../components/UserProfile";

const HomePage = () => {
  return (
    <div>
      <Calendar />
      {/* <UsersLoader /> */}
      <UserProfile />
    </div>
  );
};

export default HomePage;
