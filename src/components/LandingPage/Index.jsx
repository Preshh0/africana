import React, { Component } from "react";
import "./Landing.css";
import NavBar from "../Common/NavBar";
import Header from "./Header";
import ImageCategories from "./ImageCategories";
import Contributors from "./Contributors";
import Footer from "./Footer";

const Index = () => {
  return (
    <>
      <NavBar loggedIn={false} />
      <Header />
      <ImageCategories />
      <Contributors />
      <Footer />
    </>
  );
};

export default Index;
