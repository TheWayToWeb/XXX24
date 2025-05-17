import React from 'react';
import './AdvancedDataCardHeaderStyles.css';

const AdvancedDataCardHeaderView = ({ currentItemVisibleId, visibleCount }) => {
    return (
        <div
            className="card-header CardHeader"
            style={{ display: (currentItemVisibleId === visibleCount) ? 'block' : 'none' }}
        >
            <div className="btn-group CardHeader-ButtonGroupContainer">
                <button type="button" className="btn CardHeader-Button">+</button>
                <button type="button" className="btn CardHeader-Button">-</button>
                <button type="button" className="btn CardHeader-Button">0</button>
            </div>
        </div>
    );
}

export default AdvancedDataCardHeaderView;