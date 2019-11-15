import React, {Component} from "react";
import { Router } from "@reach/router";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import StudentInfo from "./components/StudentInfo";
import BlockList from "./components/BlockList";
import StatsViewer from "./components/StatsViewer";
import FontWrapper from "./components/FontWrapper";

class App extends Component {

  state = {
    students: [],
    fonts: ['"Comic Sans MS", cursive, sans-serif',
     '"Courier New", Courier, monospace',
      "'Merienda', cursive",
      "'Architects Daughter', cursive", 
      "'Homemade Apple', cursive",
      "'Pinyon Script', cursive",
      "'Mali', cursive",
      "'Bonbon', cursive",
      "'Bungee Inline', cursive", 
      "'Kelly Slab', cursive", 
      "'Love Ya Like A Sister', cursive", 
      "'Shojumaru', cursive", 
      "'Megrim', cursive",
      "'Faster One', cursive", 
      "'Libre Barcode 39', cursive", 
      "'Codystar', cursive", 
      "'Fascinate Inline', cursive", 
      "'Ewert', cursive", 
      "'UnifrakturCook', cursive"]
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

  updateStudent = (updatedStudent) => {
    this.setState(currentState => {
      const updatedStudents = currentState.students.map(student => {
        
        if(student._id === updatedStudent._id) {
          student.currentBlock = updatedStudent.blockHistory[updatedStudent.blockHistory.length -1].slug;
        }
        return student;
      });
      return {students: updatedStudents};
    });
  }

  changeFont = () => {
    this.setState({fonts: this.state.fonts});
  }


  render () {

    const rand = Math.floor(Math.random()*this.state.fonts.length);
    const font = this.state.fonts[rand];

    return (
    <FontWrapper font={font}>
    <div className="App">
      <Header changeFont={this.changeFont} />
      <Router>
        <Home path="/" />
        <StudentList path="/students" students={this.state.students} addStudent={this.addStudent} removeStudent={this.removeStudent} updateStudent={this.updateStudent} />
        <StudentInfo path="/students/:id" />
        <BlockList path="/blocks" students={this.state.students}/>
        <StatsViewer path="/stats" />
      </Router>
    </div>
    </FontWrapper>
    )
  }
}

export default App;
