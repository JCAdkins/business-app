import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CompanySelect from "./CompanySelect";
import Login from "./Login";
import Projects from "./Projects";
import Users from "./Users";

const App = () => {
  const [userName, setUserName] = useState();
  console.log(userName);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login setUserName={setUserName} />} />
        <Route path="/company" element={<CompanySelect />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
