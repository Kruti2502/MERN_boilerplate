import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
