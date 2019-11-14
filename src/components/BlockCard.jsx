import React from 'react';

const BlockCard = ({block, count}) => {
    return (
        <div>
            <h2>{block.name}</h2>
            <p>No. of Students: {count}</p>
        </div>
    );
};

export default BlockCard;