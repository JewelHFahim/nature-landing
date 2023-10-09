/* eslint-disable react/prop-types */
import img2 from "../../assets/singleleaf1.png";
import img3 from "../../assets/singleleaf2.png";
import img4 from "../../assets/singleleaf3.png";
import "./SliderContent.css";

const SliderContent = ({ item }) => {
  return (
    <div className="relative">

      <img src={item.img} alt="" className="h-screen w-screen" />
      
      <h1 className="text-[250px] font-[900] text-white text-opacity-[60%] text-content">
        <span className="text-u absolute">U</span>
        <span className="text-r absolute">R</span>
        <span className="text-e absolute">E</span>
      </h1>

      {/* Leaf One */}
      <div className="leaf leaf-one">
        <img
          src={img2}
          alt=""
          className="w-[112px] h-[83px] rotate-[-20deg]"
        />
      </div>

      {/* Leaf Two */}
      <div className="leaf leaf-two">
        <img src={img4} alt="" className="w-[70px] h-[52px]" />
      </div>

      {/* Leaf Three */}
      <div className="leaf leaf-three">
        <img src={img3} alt="" className="w-[70px] h-[52px]" />
      </div>
    </div>
  );
};

export default SliderContent;
