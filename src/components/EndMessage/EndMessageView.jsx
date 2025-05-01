import React from 'react';

const EndMessage = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="alert alert-info">Данных больше нет</div>
    );
};

export default EndMessage;