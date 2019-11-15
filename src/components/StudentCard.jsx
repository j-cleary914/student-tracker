import React from "react";
import { Link } from "@reach/router";
import StudentDeleter from "./StudentDeleter";
import BlockReviewer from "./BlockReviewer";

const StudentCard = ({ student, removeStudent, updateStudent }) => {
  return (
      <li>
        <Link to={`/students/${student._id}`}>
        <h2>{student.name}</h2>
        <p>Current Block: {student.currentBlock}</p>
        <p>Starting Cohort: {student.startingCohort}</p>
        </Link>
        <StudentDeleter student_id={student._id} removeStudent={removeStudent} />
        <BlockReviewer hasProgressed={true} id={student._id} updateStudent={updateStudent} />
        <BlockReviewer hasProgressed={false} id={student._id} updateStudent={updateStudent} />
      </li>
  );
};

export default StudentCard;
