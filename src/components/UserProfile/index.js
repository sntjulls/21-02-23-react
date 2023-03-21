import React, { useContext } from "react";
import { UserContext } from "../../contexts";

const UserProfile = () => {
  const { firstName, lastName } = useContext(UserContext);

  return (
    <article>
      <h3>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

export default UserProfile;