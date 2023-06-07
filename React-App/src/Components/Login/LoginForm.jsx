import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const getUser = async (token) => {
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options)
    const json = await response.json();
    console.log(json);
  }


  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options)
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLoginSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Log in</Button>
      </form>
      <Link to="/register">Register</Link>
    </section>
  );
};

export default LoginForm;
