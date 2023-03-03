import React from "react";
import Ciao from "../Ciao";

const CiaoList = (props) => {
  const mapUsers = (user) => (
    <Ciao
      key={user.id}
      id={user.id}
      classStyle="welcome"
      name={user.firstName + " " + user.lastName}
    />
  );
  const { users } = props;
  return <>{users.map(mapUsers)}</>;
};

export default CiaoList;
