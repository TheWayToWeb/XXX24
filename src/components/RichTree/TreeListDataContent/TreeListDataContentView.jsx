import React from 'react';

const TreeListDataContentView = ({ item }) => {
    return (
        <div className="DataContent">
            <div className="DataContent-Title">Email: {item.email}</div>
            <div className="DataContent-Body">{item.body}</div>
        </div>
    );
};

export default TreeListDataContentView;