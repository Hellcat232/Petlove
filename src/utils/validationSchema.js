import * as Yup from "yup";

import { emailRegExp } from "./contstants";

export const registerSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Username is required"),

  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email format"),

  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),

  confirm: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
});

export const loginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegExp, "Invalid email format"),

  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
});
