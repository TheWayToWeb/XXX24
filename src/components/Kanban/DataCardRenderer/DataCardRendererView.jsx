import React, { useContext, useMemo, createContext } from 'react';

// Импортируем созданные отдельные компоненты
import CommentDataCardIndexView from "./CommentDataCard/CommentDataCardIndexView.jsx";
import PostDataCardIndexView from "./PostDataCard/PostDataCardIndexView.jsx";
import TodoDataCardIndexView from "./TodoDataCard/TodoDataCardIndexView.jsx";
import UserDataCardIndexView from "./UserDataCard/UserDataCardIndexView.jsx";
import { KanbanListContext } from "../KanbanList/KanbanListView.jsx";
// объявляем контекст CardRendererChildView
// eslint-disable-next-line react-refresh/only-export-components
export const DataCardRendererChildContext = createContext(null);
    // Создаем объект ключей и значений
const cardComponents = {
    comment: CommentDataCardIndexView,
    post: PostDataCardIndexView,
    todo: TodoDataCardIndexView,
    user: UserDataCardIndexView
};

const DataCardRendererView = React.memo(({
    rendererVisibleItem,
    visibleItemButtonsForId
                                            }) => {
    // Инициализируем KanbanListContext
    const kanbanListContext = useContext(KanbanListContext);
    // Извлекаем необходимое свойство из контекста
    const { listType } = kanbanListContext;
    // создаем объект контекста CardRendererChildContext
    const contextValue = useMemo(() => ({
        visibleItem: rendererVisibleItem,
        visibleButtonsForId: visibleItemButtonsForId
    }), [rendererVisibleItem, visibleItemButtonsForId]);
    // Применяем маппинг к объекту cardComponents С помощью ключа listType
    const CardComponentIndexView = useMemo(() => cardComponents[listType], [listType]);

    return (
        <DataCardRendererChildContext.Provider value={contextValue}>
            <CardComponentIndexView />
        </DataCardRendererChildContext.Provider>
    );
});

export default DataCardRendererView;