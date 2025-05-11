import React from 'react';
import './BoardStyles.css';
import './CommentBlock.css';
import BoardContainer from "./BoardContainerView.jsx";
import CommentItem from '../CommentItem/CommentItemView.jsx';
import PostItem from '../PostItem/PostItemView.jsx';
import UserItem from "../UserItem/UserItem.jsx";
import TodoItem from "../TodoItem/TodoItemView.jsx";
import NotifyLoadView from "../NotifyLoad/NotifyLoadView.jsx";

const BoardView = ({ index, comments, posts, users, todos }) => (
    <BoardContainer>
        {index === 0 && (
            comments && comments.length > 0 ? (
                comments.map(comment => (
                    <CommentItem comment={comment} key={comment.id} />
                ))
            ) : (
                <div className="col-sm-12">
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <NotifyLoadView />
                        </div>
                    </div>
                </div>
            )
        )}
        {index === 1 && (
            posts && posts.length > 0 ? (
                posts.map(post => (
                    <PostItem post={post} comments={comments} key={post.id} />
                ))
            ) : (
                <div className="col-sm-12">
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <NotifyLoadView />
                        </div>
                    </div>
                </div>
            )
        )}
        {index === 2 && (
            users && users.length > 0 ? (
                users.map(user => (
                    <UserItem user={user} key={user.id} />
                ))
            ) : (
                <div className="col-sm-12">
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <NotifyLoadView />
                        </div>
                    </div>
                </div>
            )
        )}
        {index === 3 && (
            todos && todos.length > 0 ? (
                todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} />
                ))
            ) : (
                <div className="col-sm-12">
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <NotifyLoadView />
                        </div>
                    </div>
                </div>
            )
        )}
    </BoardContainer>
);

export default BoardView;