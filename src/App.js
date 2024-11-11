import "./App.css";
import ForgotPassword from "./page/forgetPassword";
import Home from "./page/Home";
import Login from "./page/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./page/profile";
import AddEmployee from "./page/addEmployee";
import LeaveApply from "./page/leaveApplication";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AddEmployee" element={<AddEmployee/>}/>
          <Route path="/LeaveApply" element={<LeaveApply/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
