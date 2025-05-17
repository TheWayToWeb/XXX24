import React from "react";
import { EnvelopeAt, FileX, TelephoneOutbound } from "react-bootstrap-icons";
import './AdvancedDataCardStyles.css';

const AdvancedDataCardView = (props) => {
    const [type, visibleCount, ...rest] = props.params; // Ожидаем, что первый элемент массива - это type
    const data = rest[0]; // Предполагаем, что второй элемент массива - это data (если есть)

    switch (type) {
        case "comment": {
            const { id, name, email, body } = data || {};
            return (
                <div className="col CardList" key={id}>
                    <div className="card Card Card_Single">
                        <div
                            className="card-header Card-Header"
                            style={{display: (id === visibleCount) ? 'block' : 'none'}}
                        >
                            <div className="btn-group" id="comments-btn-group">
                                <button type="button" className="btn">+</button>
                                <button type="button" className="btn">-</button>
                                <button type="button" className="btn">0</button>
                            </div>
                        </div>
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
                <div className="col CardList" key={id}>
                    <div className="card text-center Card Card_Single">
                        <div className="card-body Card-Body">
                            <h5 className="card-title Card-Title">{name}</h5>
                            <h6 className="card-subtitle Card-Subtitle">{address?.city}</h6>
                        </div>
                        {hasTodosList && (
                            <div className="card-footer CardFooter CardFooter_Available">
                                {todosList?.map((task) => (
                                    <div className="card text-center Card" key={task.id}>
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">{task.title}</h5>
                                            <p className={`card-text Card-Text Card-Text_Visual ${task.completed ? 'bg-success' : 'bg-warning'}`}>{task.completed ? "Success" : "Warning"}</p>
                                        </div>
                                        <div className="btn-group" id="comments-btn-group">
                                            <button type="button" className="btn">+</button>
                                            <button type="button" className="btn">-</button>
                                            <button type="button" className="btn">0</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="btn-group" id="comments-btn-group">
                        <button type="button" className="btn">+</button>
                        <button type="button" className="btn">-</button>
                        <button type="button" className="btn">0</button>
                    </div>
                </div>
            );
        }
        case "post": {
            const { id, title, body, hasComments, comments: postComments } = data || {};
            return (
                <div className="col CardList" key={id}>
                    <div className="card text-center Card Card_Single">
                        <div className="card-body Card-Body">
                            <h5 className="card-title Card-Title">{title}</h5>
                            <p className="card-text Card-Text">{body}</p>
                        </div>
                        {hasComments && (
                            <div className="card-footer CardFooter CardFooter_Available">
                                {postComments?.map(comment => (
                                    <div className="card text-center Card">
                                        <div className="card-body Card-Body">
                                            <h5 className="card-title Card-Title">Пользователь: {comment.id}</h5>
                                            <h6 className="card-subtitle Card-Subtitle">{comment.email}</h6>
                                            <p className="card-text Card-Text">{comment.body}</p>
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
                <div className=" CardList" key={id}> {/* Используем id из деструктурированного user */}
                    <div className="card Card Card_Single">
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
                            <div className="card-footer CardFooter CardFooter_Available">
                                {posts.map((post) => (
                                    <div className="card Card" key={post.id}>
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