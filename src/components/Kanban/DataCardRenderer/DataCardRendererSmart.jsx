import React, { useState, useEffect, createContext, useMemo } from 'react';
import DataCardRendererView
    from "./DataCardRendererView.jsx";
import NotifyLoaderView from "../../Application/NotifyLoader/NotifyLoaderView.jsx";
// Объявляем значение по умолчанию для контекста
// если компонент-потребитель попытается получить значение вне провайдера
// eslint-disable-next-line react-refresh/only-export-components
export const DataCardRendererContext = createContext(null);

const DataCardRendererSmart = React.memo(({ itemsVisible, type, visibleCount }) => {
    const [loading, setLoading] = useState(true);

    const contextValue = useMemo(() => ({
        listType: type,
        countVisibleItems: visibleCount
    }), [type, visibleCount]);

    useEffect(() => {
        const fetchLoader = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));

            if (itemsVisible.length > 0) {
                // Если количество элементов в массиве > 0, то скрываем loader
                setLoading(false);
            } else {
                // Если нет элементов, то тогда показываем loader
                setLoading(true);
            }
        };

        fetchLoader();
    }, [itemsVisible]);
    return (
        <>
            {loading ? (
                <NotifyLoaderView text="Загрузка..." />
            ) : (
                itemsVisible.map((item) => (
                    <DataCardRendererContext.Provider value={contextValue}>
                        <DataCardRendererView
                            rendererVisibleItem={itemsVisible[item.id - 1]}
                            visibleItemButtonsForId={item.id}
                            key={item.id}
                        />
                    </DataCardRendererContext.Provider>

                ))
            )}
        </>
    );
});

export default DataCardRendererSmart;