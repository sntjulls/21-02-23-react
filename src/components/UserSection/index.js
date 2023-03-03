import React, { Component } from "react";
import SelectedUsers from "./SelectedUsers";
import UserList from "./UserList";

const userDB = [
  { id: 1, firstName: "Brad", lastName: "Pitt" },
  { id: 2, firstName: "Fred", lastName: "Rot" },
  { id: 3, firstName: "Tom", lastName: "Got" },
  { id: 4, firstName: "Tim", lastName: "Cruse" },
  { id: 5, firstName: "Jone", lastName: "Doe" },
  { id: 6, firstName: "Alex", lastName: "Mail" },
];

class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  setUsersSelected = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUsers users={users} />
        <UserList users={users} setUsersSelected={this.setUsersSelected} />
      </>
    );
  }
}

export default UserSection;
