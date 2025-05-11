import React from 'react';
import './BoardStyles.css';
import './CommentBlock.css';

import NotifyLoadView from "../NotifyLoad/NotifyLoadView.jsx";

const BoardView = ({ index, comments, postComments, users, todos }) => {
    if (index === 0) {
        return (
            <div className="Board">
                <div className="container-fluid">
                    <div className="row">
                        {comments && comments.length > 0 ? (
                            comments.map((comment) => (
                                <div
                                    className="col-sm-12"
                                    key={comment.id}
                                >
                                    <div className="card Card">
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{comment.name}</h5>
                                            <h6 className="card-subtitle Card-Subtitle">{comment.email}</h6>
                                            <p className="card-text Card-Text">{comment.body}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-sm-12">
                                <div className="card Card">
                                    <div className="card-body Card-Body">
                                        <NotifyLoadView />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else if (index === 1) {
        return (
            <div className="Board">
                <div className="container-fluid">
                    <div className="row">
                        {postComments && postComments.length > 0 ? (
                            postComments.map((item) => (
                                <div
                                    className="col-sm-12"
                                    key={item.id}
                                >
                                    <div className="card Card">
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{item.title}</h5>
                                            <p className="card-text Card-Text">{item.body}</p>
                                            {item.hasComments && (
                                                <div className="card-footer CommentBlock CommentBlock_Transparent">
                                                    {item.comments.map(comment => (
                                                        <ul
                                                            className="list-group list-group-flush Comment Comment_Transparent"
                                                            key={comment.id}
                                                        >
                                                            <div className="Comment-ItemGroup">
                                                                <li className="list-group-item Comment-Item">Пользователь {comment.id}</li>
                                                                <li className="list-group-item Comment-Item">{comment.email}</li>
                                                            </div>
                                                            <li className="list-group-item Comment-Item">{comment.body}</li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-sm-12">
                                <div className="card Card">
                                    <div className="card-body Card-Body">
                                        <NotifyLoadView />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else if (index === 2) {
        return (
            <div className="Board">
                <div className="container-fluid">
                    <div className="row">
                        {users && users.length > 0 ? (
                            users.map((user) => (
                                <div
                                    className="col-sm-12"
                                    key={user.id}
                                >
                                    <div className="card Card">
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{user.name}</h5>
                                            <h6 className="card-subtitle Card-Subtitle">{user.username}</h6>
                                            <p className="card-text Card-Text">{user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-sm-12">
                                <div className="card Card">
                                    <div className="card-body Card-Body">
                                        <NotifyLoadView />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } else if (index === 3) {
        return (
            <div className="Board">
                <div className="container-fluid">
                    <div className="row">
                        {todos && todos.length > 0 ? (
                            todos.map((todo) => (
                                <div
                                    className="col-sm-12"
                                    key={todo.id}
                                >
                                    <div className="card Card">
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{todo.title}</h5>
                                            <p className="card-text Card-Text">{todo.completed}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-sm-12">
                                <div className="card Card">
                                    <div className="card-body Card-Body">
                                        <NotifyLoadView />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

export default BoardView;