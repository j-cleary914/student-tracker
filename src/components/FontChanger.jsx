import React from 'react';

const FontChanger = ({changeFont}) => {

    const handleClick = () => {
        changeFont();
    }

    return (
        <button onClick={handleClick}>Randomise Font</button>
    );
};

export default FontChanger;