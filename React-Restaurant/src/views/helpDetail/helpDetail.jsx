import Header from "@/components/folder/Header";
import Footer from "@/components/homePage/Footer";
import { useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
const Login = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header></Header>
      <div className="w-1/2 h-full m-auto cursor-pointer" onClick={back}>
        <div>
          <span className="inline-block mr-1 ">&lt;</span>
          <span className="inline-block mb-6 ">返回</span>
        </div>

        <div className="text-[#ef4c49] px-10 py-2">redux储存的内容</div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
