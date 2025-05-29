import React, { useState, useContext } from 'react';
import { DataCardRendererContext } from "../DataCardRendererSmart.jsx";
import { DataCardRendererChildContext } from "../DataCardRendererView.jsx";
import PostDataCardView from "./PostDataCardView.jsx";

const PostDataCardSmart = () => {
    // Инициализируем контекст
    const rendererContext = useContext(DataCardRendererContext);
    const rendererChildrenContext = useContext(DataCardRendererChildContext);
    // Извлекаем необходимые данные из контекста
    const { listType, countVisibleItems } = rendererContext;
    const { rendererItem, visibleButtonsForId } = rendererChildrenContext;
    // Извлекаем необходимые данные из renderVisibleItem
    const { id, userId, title, body, hasComments, comments: postComments } = rendererItem;
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
            countVisibleItems={countVisibleItems}
            isListVisible={isListVisible}
            buttonsVisibleForId={visibleButtonsForId}
         />
    );
};

export default PostDataCardSmart;

