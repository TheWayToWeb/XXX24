import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import './CommentDataCardStyles.less';

const CommentDataCardView = React.memo(({
    userId,
    userEmail,
    commentsNestedList,
    toggleDataCard,
    listType,
    countVisibleItems,
    isListVisible,
    buttonsVisibleForId
}) => {
    // Рисуем частичный компонент CommentList
    return (
        <div className="col CommentList" key={userId}>
            <div
                className="card text-left CommentDataCard"
                onClick={toggleDataCard}
            >
                <DataCardHeaderView
                    currentItemVisibleId={buttonsVisibleForId}
                    visibleCount={countVisibleItems}
                />
                <div className="card-body CommentDataCard-Body">
                    <h5 className="card-title CommentDataCard-Title">Пользователь: {userId}</h5>
                    <p className="card-text CommentDataCard-Text">Обратная связь: {userEmail}</p>
                </div>
                <DataCardFooterView
                    hasEntries={commentsNestedList.length > 0}
                    entries={commentsNestedList}
                    renderedTypeList={listType}
                    isListVisible={isListVisible}
                />
            </div>
        </div>
    );
});

export default CommentDataCardView;