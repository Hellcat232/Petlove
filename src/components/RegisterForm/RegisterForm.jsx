import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from "react";

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
      <form onSubmit={submitHandler}>
        <input
          type="name"
          name="name"
          value={data.name}
          onChange={change}
          placeholder="name"
        />
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

export default RegisterForm;
