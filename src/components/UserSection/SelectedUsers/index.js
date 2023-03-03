import React from "react";
import { userShape } from "../UserCard";
import { PropTypes } from 'prop-types';

const SelectedUsers = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((user) => user.isSelected);
  const mapUsers = ({ id, firstName }) => <li key={id}>{firstName}</li>;

  return <ul>{selectedUsers.map(mapUsers)}</ul>;
};

SelectedUsers.propTypes = {
  users: PropTypes.arrayOf(userShape).isRequired,

}


export default SelectedUsers;
