import React, { useState, useContext } from 'react';
import { KanbanListContext } from "../../KanbanList/KanbanListView.jsx";
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import CommentDataCardView from "./CommentDataCardView.jsx";
import './CommentDataCardStyles.less';


const CommentDataCardSmart = () => {
    // Инициализируем контекст
    const kanbanListContext = useContext(KanbanListContext);
    const rendererChildContext = useContext(DataCardRendererChildContext)
    // Извлекаем необходимые данные из контекстов
    const { listType } = kanbanListContext;
    const { visibleItem } = rendererChildContext;
    // Извлекаем необходимые свойства из объекта renderItem
    const { id, email } = visibleItem;
    // Создаём вложенный массив для выпадающего списка карты из verticalMenuDataSource
    // Имя пользователя генерируем из email
    const userName = email.split('@')[0];
    // Генерируем сам массив
    const commentsNestedList = Array.from({ length: 4 }, (_, index) => {
        return {
            name: `${userName} ${index + 1}`,
            body: `This is a comment related to ID ${id} from user ${email}. Comment number ${index + 1}`
        };
    });
    // Определяем состояние видимости выпадающего списка dataCardList
    const [isListVisible, setIsListVisible] = useState(false);
    // Определяем функцию обработчик триггер для выпадающего списка
    const toggleDataCard = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <CommentDataCardView
            userId={id}
            userEmail={email}
            commentsNestedList={commentsNestedList}
            toggleDataCard={toggleDataCard}
            listType={listType}
            isListVisible={isListVisible}
        />
    );
};

export default CommentDataCardSmart;