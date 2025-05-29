import React, { useContext } from 'react';
import { DataCardRendererContext } from "../DataCardRendererSmart.jsx";
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import DataCardHeaderView from "./DataCardHeaderView.jsx";

const DataCardHeaderSmart = () => {
    // Инициализируем контекст
    const rendererContext = useContext(DataCardRendererContext);
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