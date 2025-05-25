import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import './PostDataCardStyles.css';

const PostDataCardView = React.memo(({ renderedTypeList, data, currentItemVisibleId, visibleCount }) => {
    const { id, userId, title, body, hasComments, comments: postComments } = data;

    return (
        <div className="col PostList" key={id}>
            <div className="card text-left Post">
                <DataCardHeaderView
                    currentItemVisibleId={currentItemVisibleId}
                    visibleCount={visibleCount}
                />
                <div className="card-body Post-Body">
                    <h5 className="card-title Post-Title">Пользователь: {userId}</h5>
                    <h6 className="card-subtitle Post-Subtitle">{title}</h6>
                    <p className="card-text Post-Text">{body}</p>
                </div>
                <DataCardFooterView
                    hasEntries={hasComments}
                    entries={postComments}
                    renderedTypeList={renderedTypeList}
                />
            </div>
        </div>
    );
});

export default PostDataCardView;