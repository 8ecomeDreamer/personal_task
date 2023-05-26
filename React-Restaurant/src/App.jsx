import React from "react";
import Contact from "./components/homePage/Contact";
import Header from "./components/homePage/Header";
import Home from "./components/homePage/Home";
import About from "./components/homePage/About";
import NavIcon from "./components/homePage/NavIcon";
import Recipe from "./components/homePage/Recipe";
import Footer from "./components/homePage/Footer";
import Content from "./components/homePage/Content";

const App = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <Contact />
      <Content />
      {/* <NavIcon /> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Recipe /> */}
      <Footer />
    </div>
  );
};

export default App;
