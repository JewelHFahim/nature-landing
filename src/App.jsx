import Home from "./components/Home";
import MyTask from "./components/my-task/MyTask";

const App = () => {
  return (
    //   <div className="font-Montserrat">
    //   <Home />
    // </div>
    <div className="flex bg-[#EDF2F6] w-[1920px]">
      <p className="w-[345px] h-screen bg-green-200">Side Drawer</p>
      <MyTask />
    </div>
  );
};

export default App;
