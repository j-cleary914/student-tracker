import React from 'react';
import Axios from 'axios';

const StudentDeleter = ({student_id, removeStudent}) => {

    const handleClick = () => {
        Axios.delete(`https://nc-student-tracker.herokuapp.com/api/students/${student_id}`)
        .then(() => {
            removeStudent(student_id);
        })
    }

    return (
        <button onClick={handleClick}>Delete</button>
    );
};

export default StudentDeleter;