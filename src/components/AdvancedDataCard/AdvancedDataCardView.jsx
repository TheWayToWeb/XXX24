import React from "react";
import {EnvelopeAt, FileX, TelephoneOutbound} from "react-bootstrap-icons";
import './AdvancedDataCardStyles.css';

const AdvancedDataCardView = (props) => {
    const [type, ...rest] = props.params; // Ожидаем, что первый элемент массива - это type
    const data = rest[0]; // Предполагаем, что второй элемент массива - это data (если есть)

    switch (type) {
        case "comment": {
            const { id, name, email, body } = data || {};
            return (
                <div className="col-sm-12" key={id}>
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <h5 className="card-title Card-Title">{name}</h5>
                            <h6 className="card-subtitle Card-Subtitle">{email}</h6>
                            <p className="card-text Card-Text">{body}</p>
                        </div>
                    </div>
                </div>
            );
        }
        case "todo": {
            const { id, name, address, hasTodosList, todosList } = data || {};
            return (
                <div className="col-sm-12" key={id}>
                    <div className="card Card">
                        <div className="card-body Card-Body Card-Body_FinishedRounded">
                            <h5 className="card-title Card-Title">{name}</h5>
                            <h6 className="card-subtitle Card-Subtitle">{address?.city}</h6>
                        </div>
                        {hasTodosList && (
                            <div className="card-footer CardFooter CardFooter_HasCard">
                                {todosList?.map((task) => (
                                    <div className="card CardInFooter" key={task.id}>
                                        <div className="card-body CardInFooter-Body">
                                            <h5 className="card-text CardInFooter-Text">{task.title}</h5>
                                            <div className={`card-text CardInFooter-Text ${task.completed ? 'bg-success' : 'bg-warning'}`}>{task.completed ? "Success" : "Warning"}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        case "post": {
            const { id, title, body, hasComments, comments: postComments } = data || {};
            return (
                <div className="col-sm-12" key={id}>
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <h5 className="card-title Card-Title">{title}</h5>
                            <p className="card-text Card-Text">{body}</p>
                        </div>
                        {hasComments && (
                            <div className="card-footer CardFooter CardFooter_HasCard">
                                {postComments?.map(comment => (
                                    <div className="card text-center CardInFooter">
                                        <ul className="list-group list-group-flush CardInFooter-List">
                                            <li className="list-group-item CardInFooter-Item">Пользователь: {comment.id}</li>
                                            <li className="list-group-item CardInFooter-Item">{comment.email}</li>
                                        </ul>
                                        <div className="card-body CardInFooter-Body">
                                            <div className="card-text CardInFooter-Text">{comment.body}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        case "user": {
            const { id, name, address, email, hasPosts, posts, phone } = data || {};
            return (
                <div className="col-sm-12" key={id}> {/* Используем id из деструктурированного user */}
                    <div className="card Card">
                        <div className="card-body Card-Body">
                            <h5 className="card-title Card-Title">{name}</h5> {/* Используем name из деструктурированного user */}
                            <h6 className="card-subtitle Card-Subtitle">{address?.city}</h6> {/* Используем address из деструктурированного user */}
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <button type="button" className="btn btn-primary">
                                        <EnvelopeAt />
                                    </button>
                                    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 111 }}>
                                        <div className="toast hide show">
                                            <div className="toast-header">
                                                <button type="button" className="btn-close">
                                                    <FileX />
                                                </button>
                                            </div>
                                            <div className="toast-body">{email}</div> {/* Используем email из деструктурированного user */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6">
                                    <button type="button" className="btn btn-primary">
                                        <TelephoneOutbound />
                                    </button>
                                    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 111 }}>
                                        <div className="toast hide show">
                                            <div className="toast-header">
                                                <button type="button" className="btn-close">
                                                    <FileX />
                                                </button>
                                            </div>
                                            <div className="toast-body">{phone}</div> {/* Используем phone из деструктурированного user */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {hasPosts && (
                            <div className="card-footer CardFooter CardFooter_HasCard">
                                {posts.map((post) => (
                                    <div className="card CardInFooter" key={post.id}>
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{post.title}</h5>
                                            <p className="card-text Card-Text">{post.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        }
    }
};

export default AdvancedDataCardView;