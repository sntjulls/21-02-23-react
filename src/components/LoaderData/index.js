import React, { Component } from "react";
import PropTypes from "prop-types";

class LoaderData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: false,
      error: null,
      users: [],
    };
  }

  load = () => {
    const {loadData}=this.props 
    this.setState({ isPending: false });
    loadData()
      .then((users) => this.setState({ users }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };

  componentDidMount() {
    this.load;
  }

  render() {
    const {render} = this.props;
    return render(this.state);;
  }
}

LoaderData.propTypes = {
    loadData: PropTypes.func,
    render: PropTypes.func.isRequired
};

export default LoaderData;
