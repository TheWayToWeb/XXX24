import React from 'react';
import './TreeContentListStyles.css';

const TreeContentListView = React.memo(({ dataFolder }) => {
    return (
        <ul className="list-group ContentList">
            <li className="list-group-item ContentList-Item">Name: {dataFolder.name}</li>
            <li className="list-group-item ContentList-Item">Username: {dataFolder.username}</li>
        </ul>
    );
});

export default TreeContentListView;