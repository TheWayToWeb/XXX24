import React from 'react';
import DataCardHeaderIndexView from "../DataCardHeader/DataCardHeaderIndexView.jsx";
import DataRendererDropdownView from "../DataRendererDropdown/DataRendererDropdownView.jsx";
import './PostDataCardStyles.less';

const PostDataCardView = React.memo(({
    id,
    userId,
    title,
    body,
    hasComments,
    postComments,
    toggleDataCard,
    listType,
    isListVisible,
 }) => {

    return (
        <div className="col PostList" key={id}>
            <div
                className="card text-left Post"
                onClick={toggleDataCard}
            >
                <DataCardHeaderIndexView />
                <div className="card-body Post-Body">
                    <h5 className="card-title Post-Title">Пользователь: {userId}</h5>
                    <h6 className="card-subtitle Post-Subtitle">{title}</h6>
                    <p className="card-text Post-Text">{body}</p>
                </div>
                <DataRendererDropdownView
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