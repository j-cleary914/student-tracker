import React from 'react';

const BlockCard = ({block, count}) => {
    return (
        <div>
            <h2>{block.name}</h2>
            <p>No. of Students: {count || 0}</p>
        </div>
    );
};

export default BlockCard;