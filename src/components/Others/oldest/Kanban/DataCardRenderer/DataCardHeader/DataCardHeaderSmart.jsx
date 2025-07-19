import React, { useContext } from 'react';
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import { KanbanListContext } from "../../KanbanList/KanbanListView.jsx";
import DataCardHeaderView from "./DataCardHeaderView.jsx";

const DataCardHeaderSmart = () => {
    // Инициализируем контекст
    const rendererContext = useContext(KanbanListContext);
    const rendererChildContext = useContext(DataCardRendererChildContext);
    // Извлекаем из контекстов visibleButtonsForId и visibleCount
    const { countVisibleItems } = rendererContext;
    const { visibleButtonsForId } = rendererChildContext;

    return (
        <DataCardHeaderView
            countVisibleItems={countVisibleItems}
            visibleButtonsForId={visibleButtonsForId}
        />
    );
};

export default DataCardHeaderSmart;