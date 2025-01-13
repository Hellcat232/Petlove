import * as Yup from "yup";

import { emailRegExp } from "./contstants";

export const registerSchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(2, "Name must be at least 2 characters"),

  email: Yup.string()
    .matches(emailRegExp, "Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),

  confirm: Yup.string()
    .required("Password confirmation is required")
    .min(7, "Password must be at least 7 characters"),
});

export const loginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, "Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
});
