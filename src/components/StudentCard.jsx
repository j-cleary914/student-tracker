import React from "react";
import { Link } from "@reach/router";

const StudentCard = ({ student }) => {
  // console.log(student);
  return (
    <Link to={`/students/${student._id}`}>
      <li>
        {student.name} <br />
        {student.currentBlock}
      </li>
    </Link>
  );
};

export default StudentCard;
