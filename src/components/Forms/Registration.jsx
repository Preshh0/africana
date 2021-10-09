import React, { Component } from "react";

import "./Forms.css";
import { Link } from "react-router-dom";

const RegForm = () => {
  return (
    <div className="containereg">
      <div className="side">
        <img src="images/Rectangle 1.png" alt="Registration-image" />
      </div>
      <h2 className="h2">Africana</h2>
      <br />
      <form className="form-reg">
        <h1 className="h1">We are happy to meet you!</h1>
        <br />
        <br />
        <label className="first" for="fname">
          First Name
        </label>
        <div className="relative">
          <input
            className="input"
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
          />
        </div>

        <label className="last" for="lname">
          Last Name
        </label>
        <div className="relative">
          <input
            className="input"
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
          />
        </div>

        <label className="label" for="username">
          Username
        </label>
        <div className="relative">
          <input
            className="input"
            type="text"
            name="lname"
            id="user"
            placeholder="Username"
          />
        </div>

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
        <button className="button sec mt-54" type="button" onclick="signup()">
          {" "}
          Sign Up
        </button>
        <br />
        <p className="text">
          Already have an account?{" "}
          <Link to="/Login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegForm;
