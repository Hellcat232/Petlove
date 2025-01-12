import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useActionState } from "react";
import { registerSchemaValidation } from "../../utils/validationSchema";
import { validation } from "../../utils/validation";

const RegisterForm = () => {
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, formRegisterAction, isPending] = useActionState(
    registerHandler,
    { name: null, email: null, password: null, confirm: null }
  );

  console.log(error);

  async function registerHandler(prevState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm = formData.get("confirm");

    const { valid, errors } = await validation(registerSchemaValidation, {
      name,
      email,
      password,
      confirm,
    });

    if (!valid) {
      console.log("Validation error", errors);
      setError(errors);
      return;
    }

    if (confirm !== password) {
      console.log("Password did't match");
      setError({ password: "Password did't match" });
      return;
    }

    setError({});

    const res = await dispatch(register({ name, email, password }));
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/profile");

      return res;
    } else {
      return console.log("No register user");
    }
  }

  return (
    <>
      <form action={formRegisterAction} className={css.form}>
        <div
          className={
            Object.keys(error).length > 0
              ? css["inputs-box-error"]
              : css["inputs-box"]
          }
        >
          <input
            className={
              error.name ? css["register-input-error"] : css["register-input"]
            }
            type="text"
            name="name"
            placeholder="Name"
          />
          {error.name && <span className={css.error}>{error.name}</span>}

          <input
            className={
              error.email ? css["register-input-error"] : css["register-input"]
            }
            type="email"
            name="email"
            placeholder="Email"
          />
          {error.email && <span className={css.error}>{error.email}</span>}

          <input
            className={
              error.password
                ? css["register-input-error"]
                : css["register-input"]
            }
            type="password"
            name="password"
            placeholder="Password"
          />
          {error.password && (
            <span className={css.error}>{error.password}</span>
          )}

          <input
            className={
              error.confirm
                ? css["register-input-error"]
                : css["register-input"]
            }
            type="password"
            name="confirm"
            placeholder="Confirm password"
          />
          {error.confirm && <span className={css.error}>{error.confirm}</span>}
        </div>

        <div className={css["btn-box"]}>
          <button className={css["reg-btn"]} type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Registration"}
          </button>

          <NavLink className={css.navlink} to="/login">
            Already have an account? <span className={css.span}>Login</span>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
