// src/components/KanbanList/KanbanListView.jsx
import React from 'react';
import './KanbanListStyles.css'; // Стили остаются здесь
import DataCardRendererSmart from "../DataCardRenderer/DataCardRendererSmart.jsx";

// Этот компонент отвечает только за отрисовку
const KanbanListView = React.memo(({
                                         preLoader,
                                         itemsVisible,
                                         type,
                                         visibleCount, // Передаем, если DataCardRendererSmart это требует
                                         showLoadMoreButton,
                                         onShowMore
                                     }) => {
    if (preLoader) {
        return (
            <div className="spinner-border text-primary" />
        );
    }

    return (
        <div className="BoardSection">
            {/* Рендеринг списка карточек */}
            <DataCardRendererSmart
                itemsVisible={itemsVisible}
                type={type}
                visibleCount={visibleCount}
            />

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
    );
});

export default KanbanListView;

