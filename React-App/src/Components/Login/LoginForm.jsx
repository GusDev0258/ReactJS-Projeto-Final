import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsername = ({ target }) => {
    setUsername(target.value);
  };
  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  };
  
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLoginSubmit}>
        <Input label="User" type="text" name="username"/>
        <Input label="Password" type="password" name="password"/>
        <Button>
          Log in
        </Button>
      </form>
      <Link to="/register">Register</Link>
    </section>
  );
};

export default LoginForm;
