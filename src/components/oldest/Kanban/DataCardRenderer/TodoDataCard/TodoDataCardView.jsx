import React from 'react';
import DataCardHeaderIndexView from "../DataCardHeader/DataCardHeaderIndexView.jsx";
import DataRendererDropdownView from "../DataRendererDropdown/DataRendererDropdownView.jsx";
import './TodoDataCardStyles.less';

const TodoDataCardView = React.memo(({
    id,
    name,
    username,
    hasTodosList,
    todosList,
    toggleDataCard,
    listType,
    isListVisible,
}) => {
    // Выполняем отрисовку частичного компонента TodoDataCard
    return (
        <div className="col TodoList" key={id}>
            <div
                className="card text-center TodoCard"
            >
                <DataCardHeaderIndexView />
                <div
                    className="card-body TodoCard-Body"
                    onClick={toggleDataCard}
                >
                    <h5 className="card-title TodoCard-Title">{ name }</h5>
                    <h6 className="card-subtitle TodoCard-Subtitle">{ username }</h6>
                </div>
                <DataRendererDropdownView
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