import MainSlider from "./Slider/MainSlider";
import img1 from "../assets/NAT.png";
import img2 from "../assets/twoleaff.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute z-[999] w-full">
        <Navbar />
      </div>

      <div className="absolute z-[99] bg-black bg-opacity-[40%]">
        <img src={img1} alt="" className="h-screen w-full" />
      </div>
      
      <img
        src={img2}
        alt=""
        className="absolute z-[999] top-[32%] left-[6.5%]"
      />

      <div className="absolute z-[999] top-[36%] left-[9.5%]">
        <h1 className="primaryTitle text-[220px] font-Poppins leading-[200px]">
          NAT
        </h1>
        <p className="w-[400px] text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <button className="border px-5 my-6 border-[#89eb8894] rounded-[20px] text-white py-1 hover:shadow-md hover:shadow-[#8eec8d] hover:scale-[1.01] transform duration-200">
          Learn More
        </button>
      </div>

      <MainSlider />
    </div>
  );
};

export default Home;
