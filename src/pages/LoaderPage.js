import React, { Component } from "react";
import PropTypes from "prop-types";
import LoaderData from "../components/LoaderData";
import { getJsonPhones, getJsonUsers } from "./../api/index";

class LoaderPage extends Component {
  render() {
    return (
      <div>
        <LoaderData
          loadData={getJsonUsers}
          render={(state) => {
            const { users, isPending, error } = this.state;
            return (
              <section>
                {isPending && <Spinner />}
                {error && <Error />}
                {users.length > 0 && <ol>{users.map(this.mapUsers)}</ol>}
              </section>
            );
          }}
        />
        <LoaderData loadData={getJsonPhones} />
      </div>
    );
  }
}

LoaderPage.propTypes = {};

export default LoaderPage;
