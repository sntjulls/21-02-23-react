import React, { Component } from "react";
import PropTypes from "prop-types";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isPending: true });
    fetch(
      "https://randomuser.me/api/?results=10&seed=fd2022-2-ajax&page=1" +
        currentPage
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data.results,
        })
      )
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() => this.setState({ isPending: false }));
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  mapUsers = (user) => <li key={user.login.uuid}>{user.email}</li>;
  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: this.state.currentPage - 1 }));
    }
  };
  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: this.state.currentPage + 1 }));

  render() {
    const { users, isPending, error, currentPage } = this.state;

    if (error) {
      return <h3>Error!</h3>;
    }

    if (isPending) {
      return <h3>Loading...</h3>;
    }

    return (
      <section>
        <h2>User List</h2>
        <div>
          <button onClick={this.handlePrevBtn}>prev &lt; </button>
          <strong> {currentPage} </strong>
          <button onClick={this.handleNextBtn}> &gt; next</button>
        </div>
        <ul>{users.map(this.mapUsers)}</ul>
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;

// state.count = 0;

// setState Queue: {count: 1} {0+5} {count: 5} {0+7}

// state.count = 7
