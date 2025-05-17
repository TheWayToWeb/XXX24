import React, { useState, useEffect } from 'react';
import AdvancedDataCardIndexView from "../AdvancedDataCard/AdvancedDataCardIndexView.jsx";
import NotifyLoaderView from "../NotifyLoader/NotifyLoaderView.jsx";

const CardManagerView = React.memo(({ itemsVisible, type, visibleCount }) => {
    const [loading, setLoading] = useState(true);

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
                itemsVisible.map(item => (
                    <AdvancedDataCardIndexView
                        itemsVisible={itemsVisible}
                        type={type}
                        visibleCount={visibleCount}
                        currentItemVisibleId={item.id}
                        key={item.id}
                    />
                ))
            )}
        </>
    );
});

export default CardManagerView;