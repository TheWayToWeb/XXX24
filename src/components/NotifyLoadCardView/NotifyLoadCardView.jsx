import React from 'react';

const NotifyLoadCardView = ({ notifyLoadComponent }) => {
    return (
        <div className="col-sm-12">
            <div className="card Card">
                <div className="card-body Card-Body">
                    { notifyLoadComponent }
                </div>
            </div>
        </div>
    );
};

export default NotifyLoadCardView;