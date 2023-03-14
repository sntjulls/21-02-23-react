import React from "react";
import SubParent from "../SubParent";

const Parent = (props) => {
  return (
    <div style={{ border: "1px solid teal", padding: "10px", margin: "10px" }}>
      <h2>Parent</h2>
      <SubParent/>
    </div>
  );
};

export default Parent;
