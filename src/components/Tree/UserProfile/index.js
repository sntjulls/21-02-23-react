import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { WithTheme, WithUser } from "../../HOCs";
import styles from "./UserProfile.module.scss";
import CONSTANTS from "../../../constants";
const { THEMES } = CONSTANTS;

const UserProfile = (props) => {
  const {
    theme,
    user: { id, firstName, lastName },
  } = props;
  const articleClasses = cx(styles.article, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <article className={articleClasses}>
      <h3>
        <em>{id}) </em>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

UserProfile.defaultProps = {
  user: {
    id: 0,
    firstName: "noname",
    lastName: "noname",
  },
};
export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
});
UserProfile.propTypes = {
  user: userShape.isRequired,
};
export default WithUser(WithTheme(UserProfile));