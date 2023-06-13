import Header from "@/components/folder/Header";
import Footer from "@/components/homePage/Footer";
import { newTemplate } from "@/data/pptTemplates";
import { useNavigate } from "react-router-dom";
import src from "@/assets/about.png";


const PaidTemplates = () => {
  const navigate = useNavigate();
  const toEdit = (item) => {
    console.log(item);
    // navigate(`/pptedit?templateld=${item.id}`);
    navigate("/pptedit");
  };
  return (
    <div className="">
      <Header></Header>
      <div className="mb-8"></div>
      <div className="w-10/12 m-auto flex flex-wrap gap-3 text-center">
        {newTemplate.map((item, index) => {
          return (
            <div
              className="w-3/12 m-auto mb-8 cursor-pointer"
              key={index}
              onClick={() => { toEdit(item) }}
            >
              <div className="w-full">
                <img src={src}></img>
              </div>
              {item.title}
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaidTemplates;
