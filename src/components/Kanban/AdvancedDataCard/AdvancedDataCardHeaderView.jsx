import React from 'react';
import './AdvancedDataCardHeaderStyles.css';

const AdvancedDataCardHeaderView = () => {
    return (
        <div
            className="card-header CardHeader"
        >
            <div className="btn-group CardHeader-ButtonGroupContainer" id="comments-btn-group">
                <button type="button" className="btn CardHeader-Button">+</button>
                <button type="button" className="btn CardHeader-Button">-</button>
                <button type="button" className="btn CardHeader-Button">0</button>
            </div>
        </div>
    );
}

export default AdvancedDataCardHeaderView;