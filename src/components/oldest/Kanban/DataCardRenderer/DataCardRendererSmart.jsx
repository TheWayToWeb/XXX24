import React, { useState, useEffect, useContext } from 'react';
import DataCardRendererView
    from "./DataCardRendererView.jsx";
import SpinnerView from "../../../../shared/NotifyLoader/SpinnerView.jsx";
// выполняем импорт необходимого контекста
import { KanbanListContext } from "../KanbanList/KanbanListView.jsx";

const DataCardRendererSmart = () => {
    // инициализируем состояние загрузки лоадера NofifyLoaderView
    const [loading, setLoading] = useState(true);
    // инициализируем контекст списка элементов столбца канбан
    const kanbanListContext = useContext(KanbanListContext);
    // Извлекаем необходимые свойства из контекста
    const { startVisibleData } = kanbanListContext;
    useEffect(() => {
        const fetchLoader = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            if (startVisibleData.length > 0) {
                // Если количество элементов в массиве > 0, то скрываем loader
                setLoading(false);
            } else {
                // Если нет элементов, то тогда показываем loader
                setLoading(true);
            }
        };

        fetchLoader();
    }, [startVisibleData]);
    return (
        <>
            {loading ? (
                <SpinnerView text="Загрузка..." />
            ) : (
                startVisibleData.map((item) => (
                    <DataCardRendererView
                        rendererVisibleItem={startVisibleData[item.id - 1]}
                        visibleItemButtonsForId={item.id}
                        key={item.id}
                    />
                ))
            )}
        </>
    );
};

export default DataCardRendererSmart;