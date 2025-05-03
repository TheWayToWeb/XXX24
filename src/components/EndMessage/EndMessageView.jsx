import React from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes

const EndMessage = React.memo(({ visible }) => {
    return (
        <>
            {visible ? (
                <div className="alert alert-info">Данных больше нет</div>
            ) : null}
        </>

    );
});

EndMessage.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default EndMessage;