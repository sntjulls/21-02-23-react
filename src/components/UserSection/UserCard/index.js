import React from "react";
import PropTypes from "prop-types";

const UserCard = (props) => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;
  const styles = { color: isSelected ? "teal" : "pink" };
  const handleSelector = () => {
    userSelector(id);
  };
  return (
    <article style={styles} onClick={handleSelector}>
      <h3>
        <em>{id}) </em>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

UserCard.defaultProps = {
  user: {
    id: 0,
    firstName: "noname",
    lastName: "noname",
    isSelected: true,
  },
  userSelector: () => {},
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
});

UserCard.propTypes = {
  user: userShape.isRequired,
  userSelector: PropTypes.func,
};

export default UserCard;
