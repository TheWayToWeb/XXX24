import React from 'react';
import PropTypes from 'prop-types';

const BoardContainer = ({ children }) => (
    <div className="Board">
        <div className="container-fluid">
            <div className="row">{children}</div>
        </div>
    </div>
);

BoardContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BoardContainer;