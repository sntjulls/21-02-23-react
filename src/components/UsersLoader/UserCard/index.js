import React from "react";
import PropTypes from "prop-types";

const UserCard = (props) => {
  const {
    user: {
      email,
      gender,
      nat,
      name: { first, last },
    },
  } = props;
  return (
    <article>
      <h3>
        {first}
        {last}
      </h3>
      <p>
        nat: {nat} ({gender})
      </p>
      {/* <p>email: {email}</p> */}
    </article>
  );
};

UserCard.propTypes = {};

export default UserCard;
