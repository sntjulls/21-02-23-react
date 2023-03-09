import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import Spinner from "../Spinner";
import Error from "../Error";
import Paginate from "./../Paginate/index";
import UsersList from "./UsersList";
import { configRandomUser } from "../../configs";
import ControlAmount from "./ControlAmount";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
      currentResult: configRandomUser.AMOUNT,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isPending: true });
    getRandomUsers({ page: currentPage })
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
    if (this.state.currentPage !== prevState.currentPage) {
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

  setResults = (value) => this.setState({ currentResult: value });
  render() {
    const { users, isPending, error, currentPage, currentResult } = this.state;

    if (error) {
      return <Error />;
    }

    if (isPending) {
      return <Spinner />;
    }

    return (
      <section>
        <h2>User List</h2>

        <ControlAmount amounts={[5, 10, 15]} currentResult={currentResult}
        setResults={this.setResults} />

        <Paginate
          currentPage={currentPage}
          handlePrevBtn={this.handlePrevBtn}
          handleNextBtn={this.handleNextBtn}
        />
        <UsersList users={users} />
      </section>
    );
  }
}

UsersLoader.propTypes = {};

export default UsersLoader;

// state.count = 0;

// setState Queue: {count: 1} {0+5} {count: 5} {0+7}

// state.count = 7
