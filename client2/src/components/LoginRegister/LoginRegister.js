import React from "react";
import { useForm } from "../../hooks/useForm";
import "../styles/login.scss";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const RegsterFormKeys = {
  email: "registerEail",
  pswd: "registerPassword",
  confirmPassword: "confirmPassword",
  userName: "registerUserName",
};

export const LoginRegister = () => {
  const { onLoginSubmit, onRegisterSubmit } = useContext(AuthContext);;

  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    }, onLoginSubmit);

  const {
    values: registerValues,
    changeHandler: registerChangeHandler,
    onSubmit: registerOnSubmit,
  } = useForm(
    {
      [RegsterFormKeys.userName]: "",
      [RegsterFormKeys.email]: "",
      [RegsterFormKeys.pswd]: "",
      [RegsterFormKeys.confirmPassword]: "",
    }, onRegisterSubmit);

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form method="post">
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name={RegsterFormKeys.userName}
            placeholder="User name"
            value={registerValues[RegsterFormKeys.userName]}
            onChange={registerChangeHandler}
          />

          <input
            type="email"
            name={RegsterFormKeys.email}
            placeholder="Email"
            value={registerValues[RegsterFormKeys.email]}
            onChange={registerChangeHandler}
          />

          <input
            type="password"
            name={RegsterFormKeys.pswd}
            placeholder="Password"
            value={registerValues[RegsterFormKeys.pswd]}
            onChange={registerChangeHandler}
          />

          <input
            type="password"
            name={RegsterFormKeys.confirmPassword}
            placeholder="Confirm Password"
            value={registerValues[RegsterFormKeys.confirmPassword]}
            onChange={registerChangeHandler}
          />

          <button onClick={registerOnSubmit}>Sign up</button>


        </form>
      </div>

      <div className="login">
        <form method="post">
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            placeholder="Email"
            name={LoginFormKeys.Email}
            value={values[LoginFormKeys.Email]}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name={LoginFormKeys.Password}
            value={values[LoginFormKeys.Password]}
            onChange={changeHandler}
          />
          <button onClick={onSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};
