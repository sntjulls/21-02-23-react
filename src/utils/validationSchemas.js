import * as Yup from "yup";
export const NAME_SCHEMA = Yup.string()
  .trim()
  .min(3, "Must be more 2 symbols")
  .max(17, "Must be less 18 symbols")
  .matches(/^[A-Z][a-z]{2,16}$/, "Must be lattin letter in format like Brad")
  .required("Must required");
export const EMAIL_SCHEMA = Yup.string()
  .trim()
  .email("Must include @")
  .required("Must required");
export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
    "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
  )
  .required("Must required");
export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  age: Yup.number().min(14).max(150).required("Must required"),
  male: Yup.string()
    .default("female")
    .oneOf(["male", "female"], "Must be one of male or female"),
});

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
//gr3at@3wdsG
