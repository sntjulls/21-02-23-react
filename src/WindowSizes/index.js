import React, { Component } from "react";

class WindowSizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }

  handleResize = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.handleResize);

  }

  render() {
    const { w, h } = this.state;
    return (
      <div>
        current size width: {w}, height: {h};
      </div>
    );
  }
}

export default WindowSizes;
