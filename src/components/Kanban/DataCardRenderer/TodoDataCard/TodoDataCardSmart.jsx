import React, { useState, useContext } from 'react';
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import { KanbanListContext } from "../../KanbanList/KanbanListView.jsx";
import TodoDataCardView from "./TodoDataCardView.jsx";

const TodoDataCardSmart = () => {
    // Инициализируем контекст
    const rendererContext = useContext(KanbanListContext);
    const rendererChildrenContext = useContext(DataCardRendererChildContext);
    // Извлекаем необходимые данные из контекста
    const { listType } = rendererContext;
    const { visibleItem } = rendererChildrenContext;

    const { id, name, username, hasTodosList, todosList } = visibleItem;
    const [isListVisible, setIsListVisible] = useState(false);
    const toggleDataCard = () => {
      setIsListVisible(!isListVisible);
    };

    return (
        <TodoDataCardView
            id={id}
            name={name}
            username={username}
            hasTodosList={hasTodosList}
            todosList={todosList}
            toggleDataCard={toggleDataCard}
            listType={listType}
            isListVisible={isListVisible}
        />
    );
};

export default TodoDataCardSmart;