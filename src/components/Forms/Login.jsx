import React, { useState, useContext } from "react";
import ImagesContext from "../Common/stateProvider";
import "./Forms.css";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import endPoints from "../services/EndPoints";
import Joi from "joi-browser";

const LoginForm = () => {
  let history = useHistory();
  const context = useContext(ImagesContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    console.log(error);
    if (error) return;

    const res = await endPoints.login(data);
    console.log(res);
    localStorage.setItem("africanaToken", res.token);
    localStorage.setItem("africanaUsername", res.user_name);
    context.setLoggedIn(true);
    context.setUsername(res.user_name);
    history.push("/");
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
        <form className="form">
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

          <button onClick={handleSubmit} className="button primary mt-52">
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
