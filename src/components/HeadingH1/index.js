import React, { Component } from "react";

class HeadingH1 extends Component {
  render() {
    const { className, title, content } = this.props;
    return (
      <h1 className={className} title={title}>
        {content}
      </h1>
    );
    // return React.createElement(
    //   "h1",
    //   { className: className, title: title },
    //   content
    // );
  }
}

export default HeadingH1;