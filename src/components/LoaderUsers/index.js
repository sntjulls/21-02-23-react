import React, { Component } from "react";
import PropTypes from "prop-types";

class LoaderUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: false,
      error: null,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ isPending: false });
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((users) => this.setState({ users }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  }
  mapUsers = (user) => <li key={user.id}>{user.name}</li>;

  render() {
    const { users, isPending, error } = this.state;
    return (
      <section>
        {isPending && <Spinner />}
        {error && <Error />}
        {users.length > 0 && <ol>{users.map(this.mapUsers)}</ol>}
      </section>
    );
  }
}

LoaderUsers.propTypes = {};

export default LoaderUsers;
