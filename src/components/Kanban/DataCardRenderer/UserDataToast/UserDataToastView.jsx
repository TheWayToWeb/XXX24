import React from 'react';

const UserDataToastView = React.memo(({ icon, text }) => {
    return (
        <div className="toast hide show">
            <div className="toast-header">
                <button
                    type="button"
                    className="btn-close"
                >
                    { icon }
                </button>
            </div>
            <div className="toast-body">
                { text }
            </div>
        </div>
    );
});

export default UserDataToastView;