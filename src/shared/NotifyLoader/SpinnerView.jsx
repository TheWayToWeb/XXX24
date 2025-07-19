import React from 'react';
import './SpinnerStyles.less';

const SpinnerView = () => {
    return (
        <div className="spinner-grow Spinner">
            <span className="d-none">Loading...</span>
        </div>
    );
};

export default SpinnerView;