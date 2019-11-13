import React from "react";
import { Router } from "@reach/router";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <StudentList path="/students" />
        <StudentInfo path="/students/:id" />
      </Router>
    </div>
  );
}

export default App;
