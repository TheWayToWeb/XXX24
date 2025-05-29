import React from 'react';
import DataCardHeaderView from "../DataCardHeader/DataCardHeaderView.jsx";
import DataCardFooterView from "../DataCardFooter/DataCardFooterView.jsx";
import './TodoDataCardStyles.less';

const TodoDataCardView = React.memo(({
    id,
    name,
    username,
    hasTodosList,
    todosList,
    toggleDataCard,
    listType,
    countVisibleItems,
    isListVisible,
    buttonsVisibleForId
}) => {
    // Выполняем отрисовку частичного компонента TodoDataCard
    return (
        <div className="col TodoList" key={id}>
            <div
                className="card text-center TodoCard"
            >
                <DataCardHeaderView
                    currentItemVisibleId={buttonsVisibleForId}
                    visibleCount={countVisibleItems}
                />
                <div
                    className="card-body TodoCard-Body"
                    onClick={toggleDataCard}
                >
                    <h5 className="card-title TodoCard-Title">{ name }</h5>
                    <h6 className="card-subtitle TodoCard-Subtitle">{ username }</h6>
                </div>
                <DataCardFooterView
                    hasEntries={hasTodosList}
                    entries={todosList}
                    renderedTypeList={listType}
                    isListVisible={isListVisible}
                />
            </div>
        </div>
    );
});

export default TodoDataCardView;