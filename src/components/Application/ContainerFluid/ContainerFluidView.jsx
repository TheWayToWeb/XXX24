import React from 'react';

const ContainerFluidView = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                { children }
            </div>
        </div>
    )
};

export default ContainerFluidView;