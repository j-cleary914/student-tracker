import React from 'react';
import axios from 'axios';

const BlockReviewer = ({hasProgressed, id, updateStudent}) => {

    const handleClick = () => {
        axios.patch(`https://nc-student-tracker.herokuapp.com/api/students/${id}?progress=${hasProgressed}`)
        .then(({data: {student}}) => {
            updateStudent(student);
        });
    }

    return (
        (hasProgressed) ? <button onClick={handleClick}>Progress</button> 
                        : <button onClick={handleClick}>Resit</button>
    );
};

export default BlockReviewer;