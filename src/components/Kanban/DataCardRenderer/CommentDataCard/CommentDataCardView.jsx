import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import './CommentDataCardStyles.css';

const CommentDataCardView = React.memo(({ data, currentItemVisibleId, visibleCount }) => {
    const { id, name, email, body } = data;

    return (
        <div className="col CommentList" key={id}>
            <div className="card text-left CommentDataCard">
                <DataCardHeaderView
                    currentItemVisibleId={currentItemVisibleId}
                    visibleCount={visibleCount}
                />
                <div className="card-body CommentDataCard-Body">
                    <h5 className="card-title CommentDataCard-Title">Пользователь: {id}</h5>
                    <p className="card-text CommentDataCard-Text">Обратная связь: {email}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{body}</li>
                </ul>
            </div>
        </div>
    );
});

export default CommentDataCardView;