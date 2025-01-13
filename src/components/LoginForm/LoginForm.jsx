import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchemaValidation } from "../../utils/validationSchema";
import { validation } from "../../utils/validation";
import { useActionState, useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, formLoginAction, isPending] = useActionState(loginHandler, {
    email: null,
    password: null,
  });

  async function loginHandler(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const { valid, errors } = await validation(loginSchemaValidation, {
      email,
      password,
    });

    if (!valid) {
      console.log("Validation error", errors);
      setError(errors);
      return;
    }

    setError({});

    const res = await dispatch(login({ email, password }));
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/profile");

      return res;
    } else {
      return console.log("No logged user");
    }
  }

  return (
    <>
      <form
        action={formLoginAction}
        className={Object.keys(error).length > 0 ? css["form-error"] : css.form}
      >
        <div
          className={
            Object.keys(error).length > 0
              ? css["inputs-box-error"]
              : css["inputs-box"]
          }
        >
          <input
            className={
              error.email ? css["login-input-error"] : css["login-input"]
            }
            type="email"
            name="email"
            placeholder="Email"
          />
          {error.email && <span className={css.error}>{error.email}</span>}

          <input
            className={
              error.password ? css["login-input-error"] : css["login-input"]
            }
            type="password"
            name="password"
            placeholder="Password"
          />
          {error.password && (
            <span className={css.error}>{error.password}</span>
          )}
        </div>

        <div className={css["btn-box"]}>
          <button
            type="submit"
            className={css["login-btn"]}
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Log in"}
          </button>

          <NavLink className={css.navlink} to="/register">
            Don’t have an account? <span className={css.span}>Register</span>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
