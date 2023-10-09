import Home from "./components/Home";
import MyCalendar from "./components/calender/Calender";
import Employee from "./components/employee/Employee";
import History from "./components/history/History";
import MyTask from "./components/my-task/MyTask";
import Notices from "./components/notices/Notices";
import Setting from "./components/setting/Setting";

const App = () => {
  return (
    //   <div className="font-Montserrat">
    //   <Home />
    // </div>
    <div className="flex bg-[#EDF2F6] w-[1920px]">
      <p className="w-[345px] h-screen bg-green-200">Side Drawer</p>
      {/* <MyTask /> */}
      {/* <MyCalendar/> */}

      <Employee/>
      {/* <Notices/> */}
      {/* <History/> */}
      {/* <Setting/> */}
    </div>
  );
};

export default App;
