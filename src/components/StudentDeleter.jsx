import React from 'react';
import axios from 'axios';

const StudentDeleter = ({student_id, removeStudent}) => {

    const handleClick = () => {
        axios.delete(`https://nc-student-tracker.herokuapp.com/api/students/${student_id}`)
        .then(() => {
            removeStudent(student_id);
        })
    }

    return (
        <button onClick={handleClick}>Delete</button>
    );
};

export default StudentDeleter;