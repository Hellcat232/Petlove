import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
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
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={change}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={change}
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginForm;
