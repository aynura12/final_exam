import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Products from "../components/Products/Products";
import Helmet from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <AboutSection />
      <Info />
      <Products />
      <Contact />
    </>
  );
};

export default Home;
