import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CompanySelect from "./CompanySelect";
import Login from './Login'
import Announcements from "./Announcements";
import CreateProjects from "./CreateProjects";

const App = () => {
//username will be set here so that it can be passed to other components as well as Company for admin
  const [userName, setUserName] = useState()
  const [company, setCompany] = useState()
  
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login setUserName={setUserName}/>} />
      <Route path="/company" element={<CompanySelect company={company} setCompany={setCompany}/>} />
      <Route path="/announcements" element={<Announcements company={company}/>} />
      <Route path="/createproject" element={<CreateProjects />} />
    </Routes>

  </Router>
  );
}

export default App;
