import { useId } from "react";
import css from "../CoffeeSize/CoffeeSize.module.css";

const LoginForm = ({ onLogin }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;
    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };
  const loginId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit} className={css.options}>
      <label htmlFor={loginId}>Login</label>
      <input type="login" name="login" id={loginId} />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
