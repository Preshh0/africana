import React, { useState, useContext } from "react";
import ImagesContext from "../Common/stateProvider";
import "./Forms.css";
import { Link } from "react-router-dom";
import endPoints from "../services/EndPoints";

const RegForm = () => {
  const context = useContext(ImagesContext);
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const res = await endPoints.signup(data);
    console.log(res);
    localStorage.setItem("africanaToken", res.token);
    context.setLoggedIn(true);
  };

  const handleChange = ({ target: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  return (
    <div className="form-container">
      <div className="formleft-col">
        <img src="images/Rectangle 1.png" alt="Registration-image" />
      </div>
      <div className="formright-col">
        <h5 className="h5">Africana</h5>
        <br />
        <form className="form-reg">
          <h2 className="h2">We are happy to meet you!</h2>
          <br />

          <label className="first" for="fname">
            Full Name
          </label>
          <div className="relative">
            <input
              className="input"
              type="text"
              name="fname"
              id="fname"
              placeholder="Full Name"
              onChange={handleChange}
            />
          </div>
          <br />

          <label className="label" for="username">
            Username
          </label>
          <div className="relative">
            <input
              className="input"
              type="text"
              name="username"
              id="user"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className="box">
            <label className="label" for="email">
              Email Address
            </label>
            <div className="relative">
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-24">
            <label className="label" for="password">
              Password
            </label>
            <div className="relative">
              <input
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="button sec mt-54" onClick={handleSubmit}>
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
    </div>
  );
};

export default RegForm;
