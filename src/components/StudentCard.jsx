import React from "react";
import { Link } from "@reach/router";
import StudentDeleter from "./StudentDeleter";

const StudentCard = ({ student, removeStudent }) => {
  return (
      <li>
        <Link to={`/students/${student._id}`}>
        <h2>{student.name}</h2>
        <p>Current Block: {student.currentBlock}</p>
        <p>Starting Cohort: {student.startingCohort}</p>
        </Link>
        <StudentDeleter student_id={student._id} removeStudent={removeStudent}/>
      </li>
  );
};

export default StudentCard;
