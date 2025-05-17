import React from 'react';
import './KanbanBoardStyles.css';
import AdvancedDataCardView from '../AdvancedDataCard/AdvancedDataCardView.jsx';
import NotifyLoadCardView from "../NotifyLoadCardView/NotifyLoadCardView.jsx";

const KanbanBoardView = ({ index, comments, posts, users, todos }) => {
    let content;

    switch (index) {
        case 0:
            content = comments && comments.length > 0
                ? comments.map(comment => (
                    <AdvancedDataCardView params={["comment", comment]} key={comment.id} />
                ))
                : <NotifyLoadCardView notifyLoadComponent={NotifyLoadCardView} />;
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
            { content }
        </div>
    );
};

export default KanbanBoardView;