import React from 'react';
import './NotifyLoaderStyles.less';

const NotifyLoaderView = ({text}) => {
    return (
        <div className="NotifyLoader">{text}</div>
    );
};

export default NotifyLoaderView;