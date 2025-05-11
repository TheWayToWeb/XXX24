import React from "react";
import {EnvelopeAt, FileX, TelephoneOutbound} from "react-bootstrap-icons";

const UserItem = ({ user }) => (
    <div className="col-sm-12" key={user.id}>
        <div className="card Card">
            <div className="card-body Card-Body">
                <h5 className="card-title Card-Title">{user.name}</h5>
                <h6 className="card-subtitle Card-Subtitle">{user.address?.city}</h6>
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
                                <div className="toast-body">{user.email}</div>
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
                                <div className="toast-body">{user.phone}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {user.hasPosts && (
                <div className="card-footer">
                    {user.posts.map((post) => (
                        <div className="card" key={post.id}>
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
);

export default UserItem;