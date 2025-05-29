import React, { useState, useContext } from 'react';
import { KanbanListContext } from "../../KanbanList/KanbanListView.jsx";
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import PostDataCardView from "./PostDataCardView.jsx";

const PostDataCardSmart = () => {
    // Инициализируем контекст
    const kanbanListContext = useContext(KanbanListContext);
    const rendererChildContext = useContext(DataCardRendererChildContext);
    // Извлекаем необходимые данные из контекста
    const { listType } = kanbanListContext;
    const { visibleItem } = rendererChildContext;
    // Извлекаем необходимые данные из renderVisibleItem
    const { id, userId, title, body, hasComments, comments: postComments } = visibleItem;
    // Инициализируем состояние для показа выпадающего списка
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleDataCard = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <PostDataCardView
            id={id}
            userId={userId}
            title={title}
            body={body}
            hasComments={hasComments}
            postComments={postComments}
            toggleDataCard={toggleDataCard}
            listType={listType}
            isListVisible={isListVisible}
         />
    );
};

export default PostDataCardSmart;

