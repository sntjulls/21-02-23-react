import React from "react";
import UserProfile from "../UserProfile";

const Child = (props) => {
  return (
    <div style={{ border: "1px solid teal", padding: "10px", margin: "10px" }}>
      <h2>Child</h2>
      <UserProfile />
    </div>
  );
};

export default Child;
