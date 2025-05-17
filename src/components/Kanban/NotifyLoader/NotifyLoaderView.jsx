import React from 'react';
import './NotifyLoaderStyles.css';

const NotifyLoaderView = ({text}) => {
    return (
        <div className="NotifyLoader">{text}</div>
    );
};

export default NotifyLoaderView;