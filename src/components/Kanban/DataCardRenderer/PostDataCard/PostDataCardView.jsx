import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import './PostDataCardStyles.css';

const PostDataCardView = React.memo(({
    id,
    userId,
    title,
    body,
    hasComments,
    postComments,
    toggleDataCard,
    listType,
    countVisibleItems,
    isListVisible,
    buttonsVisibleForId
 }) => {

    return (
        <div className="col PostList" key={id}>
            <div
                className="card text-left Post"
                onClick={toggleDataCard}
            >
                <DataCardHeaderView
                    currentItemVisibleId={buttonsVisibleForId}
                    visibleCount={countVisibleItems}
                />
                <div className="card-body Post-Body">
                    <h5 className="card-title Post-Title">Пользователь: {userId}</h5>
                    <h6 className="card-subtitle Post-Subtitle">{title}</h6>
                    <p className="card-text Post-Text">{body}</p>
                </div>
                <DataCardFooterView
                    hasEntries={hasComments}
                    entries={postComments}
                    renderedTypeList={listType}
                    isListVisible={isListVisible}
                />
            </div>
        </div>
    );
});

export default PostDataCardView;