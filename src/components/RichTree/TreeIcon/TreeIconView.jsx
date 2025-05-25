import React from 'react';
import './TreeIconStyles.less';

const TreeIconView = React.memo(({ icon }) => {
    return (
        <div className="RichTreeIcon">
            { icon }
        </div>
    );
});

export default TreeIconView