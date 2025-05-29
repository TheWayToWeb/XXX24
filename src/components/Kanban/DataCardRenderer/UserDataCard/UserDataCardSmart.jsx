import React, { useState, useContext } from 'react';
import { DataCardRendererContext } from "../DataCardRendererSmart.jsx";
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import UserDataCardView from "./UserDataCardView.jsx";

const UserDataCardSmart = () => {
    // Инициализируем контексты
    const rendererContext = useContext(DataCardRendererContext);
    const rendererChildrenContext = useContext(DataCardRendererChildContext);
    // Извлекаем необходимые данные из контекста
    const { listType, countVisibleItems } = rendererContext;
    const { rendererItem, visibleButtonsForId } = rendererChildrenContext;
    // Достаем что нужно из другого контекста
    const { id, name, username, email, phone, company, hasPosts, posts } = rendererItem;
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
            countVisibleItems={countVisibleItems}
            isListVisible={isListVisible}
            buttonsVisibleForId={visibleButtonsForId}
        />
    );
};

export default UserDataCardSmart;