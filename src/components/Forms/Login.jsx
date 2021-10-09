import React, { useState } from "react";
import "./Forms.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Joi from "joi-browser";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),

    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const result = Joi.validate(data, schema, { abortEarly: false });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };

    const fieldSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, fieldSchema);

    return error ? error.details[0].message : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate());

    if (errors) return;
  };

  const handleChange = ({ target: input }) => {
    setData({ ...data, [input.name]: input.value });

    const errorsTemp = { ...errors };

    const errorMessage = validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) {
      errorsTemp[input.name] = errorMessage;
    } else {
      delete errorsTemp[input.name];
    }
    setErrors(errorsTemp);
  };

  return (
    <div className="form-container">
      <div className="formleft-col">
        <img src="images/Rectangle 0.png" alt="Login-image" />
      </div>
      <div className="formright-col">
        <h5 className="h5">Africana</h5>
        <br />
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="h2">Welcome back.</h2>
          <br />

          <div className="box">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            {/* <div className="relative"> */}
            {/* <img className="absolute right-0" src="mail-fill.svg" /> */}
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
            {/* </div> */}
            {errors.email && <p className="errormessage">{errors.email}</p>}
          </div>
          <div className="mt-24">
            <label className="label" htmlFor="password">
              Password
            </label>

            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />

            {errors?.password && (
              <p className="errormessage">{errors.password}</p>
            )}
          </div>

          <button className="button primary mt-52" type="submit">
            Login
          </button>
          <br />
          <p className="text">
            Don't have an account yet?{" "}
            <Link to="/Registration" className="underline">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
