import React, { Component } from "react";
import Axios from "axios";
import StudentCard from "./StudentCard";
import StudentAdder from "./StudentAdder";
import ViewToggler from "./ViewToggler";

class StudentList extends Component {

  postStudent = (student) => {
    return Axios.post("https://nc-student-tracker.herokuapp.com/api/students", student).then(({data: {student}}) => {
      return student;
    })
  }

  render() {
    const { students, removeStudent } = this.props;
    const fun = students.filter(student => student.currentBlock === 'fun');
    const be = students.filter(student => student.currentBlock === 'be');
    const fe = students.filter(student => student.currentBlock === 'fe');
    const proj = students.filter(student => student.currentBlock === 'proj');
    const grad = students.filter(student => student.currentBlock === 'grad');
    return (
      <div>
      <StudentAdder postStudent={this.postStudent} addStudent={this.props.addStudent} />
      <h2>No. of Students: {students.length}</h2>
      <div>
        Fundamentals
        <ViewToggler>
          <ul>
            {fun.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent}/>;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Back End
        <ViewToggler>
          <ul>
            {be.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent}/>;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Front End
        <ViewToggler>
          <ul>
            {fe.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent}/>;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Project
        <ViewToggler>
          <ul>
            {proj.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent}/>;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Graduated
        <ViewToggler>
          <ul>
            {grad.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent}/>;
            })}
          </ul>
        </ViewToggler>
      </div>
      </div>
    );
  }
}

export default StudentList;
