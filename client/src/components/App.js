import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CompanySelect from "./CompanySelect";
import Login from './Login'

//Dev Componenets
import TeamOverview from './TeamOverview'

//CSS import
import "../components/component-Styles/main.css";

const App = () => {

  const [userName, setUserName] = useState()
console.log(userName)
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login setUserName={setUserName}/>} />
      <Route path="/company" element={<CompanySelect />} />

      //Dev Routes Here please
      <Route path="/TeamOverview" element={<TeamOverview />} />
    </Routes>

  </Router>
  );
}

export default App;
