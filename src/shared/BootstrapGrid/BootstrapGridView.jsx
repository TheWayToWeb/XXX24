import React from 'react';

const BootstrapGridView = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                { children }
            </div>
        </div>
    )
};

export default BootstrapGridView;