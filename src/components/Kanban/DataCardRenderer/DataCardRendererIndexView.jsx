import React, { useContext } from 'react';
import DataCardRendererSmart from "./DataCardRendererSmart.jsx";
import {KanbanListContext} from "../KanbanList/KanbanListView.jsx";

const DataCardRendererIndexView = () => {
    const context = useContext(KanbanListContext);
    const { startVisibleData, listType, countVisibleItems } = context;

    return (
        <DataCardRendererSmart
            itemsVisible={startVisibleData}
            type={listType}
            visibleCount={countVisibleItems}
        />
    );
}

export default DataCardRendererIndexView;