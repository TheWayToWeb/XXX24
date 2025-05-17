import React, { useState } from 'react';
import './KanbanBoardStyles.css';
import AdvancedDataCardView from '../AdvancedDataCard/AdvancedDataCardView.jsx';
import NotifyLoadCardView from "../NotifyLoadCardView/NotifyLoadCardView.jsx";

const KanbanBoardView = ({ index, comments, posts, users, todos }) => {
    const commentsArray = Array.from(comments);
    const [visibleCount, setVisibleCount] = useState(6);

    let visibleComments, content;

    switch (index) {
        case 0:
            visibleComments = commentsArray.slice(0, visibleCount);
            content = visibleComments.length > 0 ? visibleComments.map(comment => (
                <AdvancedDataCardView params={["comment", visibleCount, comment]} key={comment.id} />
            )) : <NotifyLoadCardView notifyLoadComponent={NotifyLoadCardView} />;
            break;
        case 1:
            content = posts && posts.length > 0
                ? posts.map(post => (
                    <AdvancedDataCardView params={["post", post]} key={post.id} />
                ))
                : <NotifyLoadCardView notifyLoadComponent={NotifyLoadCardView} />;
            break;
        case 2:
            content = users && users.length > 0
                ? users.map(user => (
                    <AdvancedDataCardView params={["user", user]} key={user.id} />
                ))
                : <NotifyLoadCardView notifyLoadComponent={NotifyLoadCardView} />;
            break;
        case 3:
            content = todos && todos.length > 0
                ? todos.map(todo => (
                    <AdvancedDataCardView params={["todo", todo]} key={todo.id} />
                ))
                : <NotifyLoadCardView notifyLoadComponent={NotifyLoadCardView} />;
            break;
    }

    return (
        <div className="KanbanBoard">
            {content}
            {index === 0 && commentsArray.length > visibleCount && (
                <button
                    className="btn ShowMore"
                    onClick={() => setVisibleCount(visibleCount + 3)}
                >
                    Показать больше
                </button>
            )}
        </div>
    );
};

export default KanbanBoardView;
