
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import fetchFromCompany, { request } from "../services/api";

import CompanySelect from "./CompanySelect";

import Login from "./Login";
import Announcements from "./Announcements";

import Projects from "./Projects";
import Users from "./Users";

//Dev Components
import TeamOverview from "./TeamOverview";

//CSS import
import "../components/component-Styles/main.css";

const App = () => {
  //username will be set here so that it can be passed to other components as well as Company for admin
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [userData, setUserData] = useState();
  const [company, setCompany] = useState();
  
  let navigate = useNavigate();


  const loginAuth = async () => {
    const response = await fetchFromCompany({
      endpoint: "auth/login",
      method: "POST",
      body: {
        username: userName,
        password: password,
      },
    })
    
    setUserData(response)
    return response
  }


  const handleLogin = () => {
    loginAuth()
    userData.credentials.admin
      ? navigate("/company")
      : navigate("/announcements");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Login handleLogin={handleLogin} setUserName={setUserName} setPassword={setPassword} />}
      />
      <Route path="/company" element={<CompanySelect userData={userData} setCompany={setCompany} />} />
      <Route path="/TeamOverview" element={<TeamOverview />} />

      <Route
        path="/announcements"
        element={<Announcements userData={userData} company={company}/>}
      />

      <Route path="/projects" element={<Projects />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default App;
