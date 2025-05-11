import React from 'react';
import './BoardStyles.css';
import './CommentBlock.css';

import NotifyLoadView from "../NotifyLoad/NotifyLoadView.jsx";

const BoardView = ({ index, comments, posts, users, todos }) => {
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
                        {posts && posts.length > 0 ? (
                            posts.map((item) => (
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
                                            <h6 className="card-subtitle Card-Subtitle">{user.address.city}</h6>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <button type="button" className="btn btn-primary">
                                                        <i className="bi bi-envelope-at"></i>
                                                    </button>
                                                    <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 111}}>
                                                        <div className="toast hide show">
                                                            <div className="toast-header">
                                                                <button type="button" className="btn-close">
                                                                    <i className="bi bi-file-x"></i>
                                                                </button>
                                                            </div>
                                                            <div className="toast-body">
                                                                {user.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-6">
                                                    <button type="button" className="btn btn-primary">
                                                        <i className="bi bi-telephone-outbound"></i>
                                                    </button>
                                                    <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 111}}>
                                                        <div className="toast hide show">
                                                            <div className="toast-header">
                                                                <button type="button" className="btn-close">
                                                                    <i className="bi bi-file-x"></i>
                                                                </button>
                                                            </div>
                                                            <div className="toast-body">
                                                                {user.phone}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {user.hasPosts && (
                                            <div className="card-footer">
                                                {user.posts.map((post) => (
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{post.title}</h5>
                                                            <p className="card-text">{post.body}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
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
                            todos.map((item) => (
                                <div
                                    className="col-sm-12"
                                    key={item.id}
                                >
                                    <div className="card Card">
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{item.name}</h5>
                                            <h6 className="card-subtitle Card-Subtitle">{item.address.city}</h6>
                                        </div>
                                        {item.hasTodosList && (
                                            <div className="card-footer">
                                                {item.todosList.map((task => (
                                                    <div className="card">
                                                        <div className={`card-header ${task.completed ? 'bg-success': 'bg-warning'}`}>{task.completed ? "Success": "Warning"}</div>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{task.title}</h5>
                                                        </div>
                                                    </div>
                                                ))) }
                                            </div>
                                        )}
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