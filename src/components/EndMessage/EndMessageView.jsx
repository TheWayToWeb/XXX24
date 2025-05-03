import React from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes

const EndMessage = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="alert alert-info">Данных больше нет</div>
    );
};

EndMessage.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default EndMessage;