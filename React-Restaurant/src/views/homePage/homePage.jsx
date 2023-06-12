import Contact from "@/components/homePage/Contact";
// import Header from "@/components/homePage/Header";
import Header from "@/components/folder/Header";
import Content from "@/components/homePage/Content";
import Footer from "@/components/homePage/Footer";

const HomePage = () => {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <Contact />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
