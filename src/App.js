import React, {Component} from "react";
import { Router } from "@reach/router";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import StudentInfo from "./components/StudentInfo";
import BlockList from "./components/BlockList";
import ViewToggler from "./components/ViewToggler";

class App extends Component {

  state = {
    students: []
  }


  componentDidMount() {
    axios.get("https://nc-student-tracker.herokuapp.com/api/students").then(
      ({ data: { students } }) => {
        this.setState({ students });
      }
    );
  }


  addStudent = (postedStudent) => {
    this.setState(currentState => {
      return {students: [postedStudent, ...currentState.students]}
    })
  }

  removeStudent = (id) => {
    this.setState(currentState => {
      const filteredStudents = currentState.students.filter(student => student._id !== id);
      return {students: filteredStudents}
    });
  }

  render () {
    return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <StudentList path="/students" students={this.state.students} addStudent={this.addStudent} removeStudent={this.removeStudent}/>
        <StudentInfo path="/students/:id" />
        <BlockList path="/blocks" students={this.state.students}/>
      </Router>
    </div>
    )
  }
}

export default App;
