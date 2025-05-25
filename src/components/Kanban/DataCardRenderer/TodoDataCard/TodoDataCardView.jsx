import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import './TodoDataCardStyles.css';

const TodoDataCardView = React.memo(({ renderedTypeList, data, currentItemVisibleId, visibleCount }) => {
    const { id, name, username, hasTodosList, todosList } = data;

    return (
        <div className="col TodoList" key={id}>
            <div className="card text-center TodoCard">
                <DataCardHeaderView
                    currentItemVisibleId={currentItemVisibleId}
                    visibleCount={visibleCount}
                />
                <div className="card-body TodoCard-Body">
                    <h5 className="card-title TodoCard-Title">{ name }</h5>
                    <h6 className="card-subtitle TodoCard-Subtitle">{ username }</h6>
                </div>
                <DataCardFooterView
                    hasEntries={hasTodosList}
                    entries={todosList}
                    renderedTypeList={renderedTypeList}
                />
            </div>
        </div>
    );
});

export default TodoDataCardView;