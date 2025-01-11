import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { registerSchemaValidation } from "../../utils/validationSchema";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault(); // Отмена стандартного поведения формы
    dispatch(register(data)); // Отправка данных из состояния
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
      <form onSubmit={submitHandler} className="flex flex-col gap-6">
        <div className={css["inputs-box"]}>
          <input
            className={css["register-input"]}
            type="name"
            name="name"
            value={data.name}
            onChange={change}
            placeholder="Name"
          />
          <input
            className={css["register-input"]}
            type="email"
            name="email"
            value={data.email}
            onChange={change}
            placeholder="Email"
          />
          <input
            className={css["register-input"]}
            type="password"
            name="password"
            value={data.password}
            onChange={change}
            placeholder="Password"
          />
          <input
            className={css["register-input"]}
            type="password"
            name="confirm"
            value={data.password}
            onChange={change}
            placeholder="Confirm password"
          />
        </div>

        <div className={css["btn-box"]}>
          <button className={css["reg-btn"]} type="submit">
            Registration
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
