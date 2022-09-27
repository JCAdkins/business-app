import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import fetchFromCompany, { request } from "../services/api";
import { useState } from "react";
import CompanySelect from "./CompanySelect";

import Login from "./Login";
import Announcements from "./Announcements";

import Projects from "./Projects";
import Users from "./Users";

//Dev Componenets
import TeamOverview from "./TeamOverview";
import AnnouncementsTest from "./AnnouncementsTest";

//CSS import
import "../components/component-Styles/main.css";

const App = () => {
  //username will be set here so that it can be passed to other components as well as Company for admin
  const [userName, setUserName] = useState();

  const [userData, setUserData] = useState();

  const [password, setPassword] = useState();
  console.log(userData);
  let navigate = useNavigate();

  const handleLogin = () => {
    //pass in user credentials and verify
    //if user admin is true go to company select screen
    //if user is not admin go to anounncments
    const loginAuth = async () => {
      const response = await fetchFromCompany({
        endpoint: "getusers"
      })
      return response
    }
    
    loginAuth()

  setUserData([
      {
        id: 1,
        credentials: {
          userName: userName,
          admin: false,
        },
        first: "Ricky",
        last: "Board",
        email: "testing@yahoo.com",
        phone: "-123-234-5432",
        active: true,
        team: {
          id: 1,
          name: "awesome",
          description: "crushing it",
          company: {
            id: 3,
            name: "Apple",
            description: "working on products",
          },
        },
        company: {
          id: 3,
          name: "Apple",
          description: "working on products",
        },
      },
    ]);

    // if(userData.credentials.admin === true){
    //   navigate("/company")
    // }

    localStorage.setItem("userData", JSON.stringify(userData[0]));

    userData[0].credentials.admin
      ? navigate("/company")
      : navigate("/announcements");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            handleLogin={handleLogin}
            setUserName={setUserName}
            setPassword={setPassword}
          />
        }
      />
      <Route path="/company" element={<CompanySelect userData={userData} />} />
      <Route path="/TeamOverview" element={<TeamOverview />} />
      <Route
        path="/announcements"
        element={<Announcements userData={userData} />}
      />
      <Route path="/projects" element={<Projects />} />
      <Route path="/users" element={<Users />} />

      //Test Routes
      <Route path="/announcementsTest" element={<AnnouncementsTest />} />
    </Routes>
  );
};

export default App;
