import { useId } from "react";
import css from "../CoffeeSize/CoffeeSize.module.css";

const LoginForm = ({ values, onChange }) => {
  const handleChange = (evt) => {
    onChange({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);

    onChange({
      login: "",
      password: "",
    });
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit} className={css.options}>
      <label htmlFor={loginId}>Login</label>
      <input
        type="login"
        name="login"
        id={loginId}
        value={values.login}
        onChange={handleChange}
      />
      <label htmlFor={passwordId}>Password</label>
      <input
        type="password"
        name="password"
        id={passwordId}
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
