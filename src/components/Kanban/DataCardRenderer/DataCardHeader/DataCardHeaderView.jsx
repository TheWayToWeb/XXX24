import React from 'react';
import './DataCardHeaderStyles.css';


const DataCardHeaderView = React.memo(({ currentItemVisibleId, visibleCount }) => {
    return (
        <div
            className="card-header DataCardHeader"
            style={{ display: (currentItemVisibleId === visibleCount) ? 'block' : 'none' }}
        >
            <div className="btn-group DataCardHeader-ButtonGroup">
                <button type="button" className="btn DataCardHeader-Button">+</button>
                <button type="button" className="btn DataCardHeader-Button">-</button>
                <button type="button" className="btn DataCardHeader-Button">0</button>
            </div>
        </div>
    );
});

export default DataCardHeaderView;