import React from "react";

const CommentItem = ({ comment }) => (
    <div className="col-sm-12" key={comment.id}>
        <div className="card Card">
            <div className="card-body Card-Body">
                <h5 className="card-title Card-Title">{comment.name}</h5>
                <h6 className="card-subtitle Card-Subtitle">{comment.email}</h6>
                <p className="card-text Card-Text">{comment.body}</p>
            </div>
        </div>
    </div>
);

export default CommentItem;