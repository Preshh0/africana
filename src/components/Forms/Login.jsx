import React, { Component } from "react";
import "./Forms.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
            <label className="label" for="email">
              Email Address
            </label>
            <div className="relative">
              <img className="absolute right-0" src="mail-fill.svg" />
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mt-24">
            <label className="label" for="password">
              Password
            </label>
            <div className="relative">
              <img
                id="show"
                className="absolute right-0"
                src="eye-off-fill.svg"
                onclick="showPassword()"
              />
              <img
                id="hide"
                className="absolute right-0"
                src="eye-fill.svg"
                onclick="hidePassword()"
              />

              <input
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            className="button primary mt-52"
            type="button"
            onclick="login()"
          >
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
