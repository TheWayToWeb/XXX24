import React, { useState, useContext } from 'react';
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import { KanbanListContext } from "../../KanbanList/KanbanListView.jsx";
import UserDataCardView from "./UserDataCardView.jsx";

const UserDataCardSmart = () => {
    // Инициализируем контексты
    const rendererContext = useContext(KanbanListContext);
    const rendererChildrenContext = useContext(DataCardRendererChildContext);
    // Извлекаем необходимые данные из контекста
    const { listType } = rendererContext;
    const { visibleItem } = rendererChildrenContext;
    // Достаем что нужно из другого контекста
    const { id, name, username, email, phone, company, hasPosts, posts } = visibleItem;
    // Инициализируем состояние отображения списка
    const [isListVisible, setIsListVisible] = useState(false);
    // Описываем функцию обработчик триггер которая показывает список
    const toggleDataCard = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <UserDataCardView
            id={id}
            name={name}
            username={username}
            email={email}
            phone={phone}
            company={company}
            hasPosts={hasPosts}
            posts={posts}
            toggleDataCard={toggleDataCard}
            listType={listType}
            isListVisible={isListVisible}
        />
    );
};

export default UserDataCardSmart;