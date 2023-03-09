import React from "react";
import { PropTypes } from "prop-types";

const UsersList = (props) => {
  const { users } = props;
  const mapUsers = (user) => <li key={user.login.uuid}>{user.email}</li>;
  return <ul>{users.map(mapUsers)}</ul>;
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersList;
