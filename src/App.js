import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashbord from "./pages/Dashbord";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  return(
    <div className=" w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="/singup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashbord/>
          </PrivateRoute>
        }/>



      </Routes>
    </div>
  );
}

export default App;
