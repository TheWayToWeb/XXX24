import React from 'react';
import './DataCardHeaderStyles.css';

const DataCardHeaderView = React.memo(({ currentItemVisibleId, visibleCount }) => {
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
});

export default DataCardHeaderView;