import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { loginSchemaValidation } from "../../utils/validationSchema";
import { useFormStatus } from "react-dom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { pending } = useFormStatus();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault(); // Отмена стандартного поведения формы
    dispatch(login(data)); // Отправка данных из состояния
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col gap-10">
        <div className={css["inputs-box"]}>
          <input
            className={css["login-input"]}
            type="email"
            name="email"
            value={data.email}
            onChange={change}
            placeholder="Email"
          />
          <input
            className={css["login-input"]}
            type="password"
            name="password"
            value={data.password}
            onChange={change}
            placeholder="Password"
          />
        </div>

        <div className={css["btn-box"]}>
          <button type="submit" className={css["login-btn"]}>
            Log in
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
