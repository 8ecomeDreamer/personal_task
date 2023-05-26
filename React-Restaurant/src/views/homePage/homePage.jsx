import Contact from "@/components/homePage/Contact";
import Header from "@/components/homePage/Header";
import Content from "@/components/homePage/Content";
import Footer from "@/components/homePage/Footer";
// import Home from "../components/homePage/Home";
// import About from "../components/homePage/About";
// import NavIcon from "../components/homePage/NavIcon";
// import Recipe from "../components/homePage/Recipe";

const HomePage = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <Contact />
      <Content />
      <Footer />
      {/* <NavIcon /> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Recipe /> */}
    </div>
  );
};

export default HomePage;
