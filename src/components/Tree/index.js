import React from 'react';
import Parent from './Parent';

const Tree = (props) => {
    return (
        <div style={{ border: "1px solid teal", padding: "10px", margin: "10px" }}>
            <h2>Tree</h2>
            <Parent />
        </div>
    );
};

export default Tree;
