import React, { Component } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import StudentAdder from "./StudentAdder";
import ViewToggler from "./ViewToggler";

class StudentList extends Component {

  postStudent = (student) => {
    return axios.post("https://nc-student-tracker.herokuapp.com/api/students", student).then(({data: {student}}) => {
      return student;
    })
  }

  render() {
    const { students, removeStudent, updateStudent } = this.props;
    const fun = students.filter(student => student.currentBlock === 'fun');
    const be = students.filter(student => student.currentBlock === 'be');
    const fe = students.filter(student => student.currentBlock === 'fe');
    const proj = students.filter(student => student.currentBlock === 'proj');
    const grad = students.filter(student => student.currentBlock === 'grad');
    return (
      <div className='grid-container'>
      <StudentAdder postStudent={this.postStudent} addStudent={this.props.addStudent} />
      <h2 className='num-students'>No. of Students: {students.length}</h2>
      <div >
        Fundamentals
        <ViewToggler>
          <ul className="student-block">
            {fun.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent} updateStudent={updateStudent} />;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Back End
        <ViewToggler>
          <ul className="student-block">
            {be.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent} updateStudent={updateStudent} />;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Front End
        <ViewToggler>
          <ul className="student-block">
            {fe.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent} updateStudent={updateStudent} />;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Project
        <ViewToggler>
          <ul className="student-block">
            {proj.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent} updateStudent={updateStudent} />;
            })}
          </ul>
        </ViewToggler>
      </div>
      <div>
        Graduated
        <ViewToggler>
          <ul className="student-block">
            {grad.map(student => {
              return <StudentCard student={student} key={student._id} removeStudent={removeStudent} updateStudent={updateStudent} />;
            })}
          </ul>
        </ViewToggler>
      </div>
      </div>
    );
  }
}

export default StudentList;
