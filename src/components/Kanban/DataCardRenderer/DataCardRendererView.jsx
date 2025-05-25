import React, { useMemo } from 'react';

// Импортируем созданные отдельные компоненты
import CommentDataCardView from "./CommentDataCard/CommentDataCardView.jsx";
import PostDataCardView from "./PostDataCard/PostDataCardView.jsx";
import TodoDataCardView from "./TodoDataCard/TodoDataCardView.jsx";
import UserDataCardView from "./UserDataCard/UserDataCardView.jsx";

const cardComponents = {
    comment: CommentDataCardView,
    post: PostDataCardView,
    todo: TodoDataCardView,
    user: UserDataCardView
};

const MultiChoiceDataCardView = React.memo(({ renderedTypeList, rest, visibleCount, currentItemVisibleId }) => {
    const CardComponent = useMemo(() => cardComponents[renderedTypeList], [renderedTypeList]);

    return (
        <CardComponent
            data={rest[0]}
            currentItemVisibleId={currentItemVisibleId}
            visibleCount={visibleCount}
            renderedTypeList={renderedTypeList}
        />
    );
});

export default MultiChoiceDataCardView;