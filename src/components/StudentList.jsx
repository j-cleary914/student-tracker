import React, { Component } from "react";
import Axios from "axios";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    Axios.get("https://nc-student-tracker.herokuapp.com/api/students").then(
      ({ data: { students } }) => {
        this.setState({ students });
      }
    );
  }

  render() {
    console.log(this.state.students);
    const { students } = this.state;
    return (
      <ul>
        {students.map(student => {
          return <StudentCard student={student} key={student._id} />;
        })}
      </ul>
    );
  }
}

export default StudentList;
