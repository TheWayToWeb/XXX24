import React from "react";

const PostItem = ({ post, comments }) => {
    const postComments = comments.filter(comment => comment.postId === post.id);
    return (
        <div className="col-sm-12" key={post.id}>
            <div className="card Card">
                <div className="card-body Card-Body">
                    <h5 className="card-title Card-Title">{post.title}</h5>
                    <p className="card-text Card-Text">{post.body}</p>
                    {post.hasComments && (
                        <div className="card-footer CommentBlock CommentBlock_Transparent">
                            {postComments.map(comment => (
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
    );
};

export default PostItem;