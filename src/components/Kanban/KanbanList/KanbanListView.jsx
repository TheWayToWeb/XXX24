// src/components/KanbanList/KanbanListView.jsx
import React, { createContext, useMemo } from 'react';
import './KanbanListStyles.css'; // Стили остаются здесь
import DataCardRendererIndexView from "../DataCardRenderer/DataCardRendererIndexView.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const KanbanListContext = createContext(null);

// Этот компонент отвечает только за отрисовку
const KanbanListView = React.memo(({
                                         preLoader,
                                         startVisibleData,
                                         currentType,
                                         countVisibleItems, // Передаем, если DataCardRendererSmart это требует
                                         showLoadMoreButton,
                                         onShowMore
                                     }) => {
    if (preLoader) {
        return (
            <div className="spinner-border text-primary" />
        );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const contextValue = useMemo(() => ({
        startVisibleData: startVisibleData,
        listType: currentType,
        countVisibleItems: countVisibleItems
    }), [startVisibleData, currentType, countVisibleItems]); // Перерисовываем контекст при изменении параметров

    return (
        <KanbanListContext.Provider value={contextValue}>
            <div className="BoardSection">
                {/* Рендеринг списка карточек */}
                <DataCardRendererIndexView />

                {/* Кнопка "Показать больше" */}
                {showLoadMoreButton && (
                    <button
                        className="btn BoardSectionButton"
                        onClick={onShowMore}
                    >
                        Показать больше
                    </button>
                )}
            </div>
        </KanbanListContext.Provider>
    );
});

export default KanbanListView;

