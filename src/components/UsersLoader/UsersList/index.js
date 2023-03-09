import React from "react";
import PropTypes from "prop-types";
import UserCard from "../UserCard";

const UsersList = (props) => {
  const { users } = props;
  const mapUsers = (user) => (
    <li
      key={user.login.uuid}
      style={{
        display: "inline-block",
        padding: "10px",
        border: "teal 1px solid",
        margin: "10px",
      }}
    >
      <UserCard user={user} />
    </li>
  );
  return <ul>{users.map(mapUsers)}</ul>;
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersList;
