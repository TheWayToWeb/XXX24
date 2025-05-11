import React from "react";

const TodoItem = ({ todo }) => (
    <div className="col-sm-12" key={todo.id}>
        <div className="card Card">
            <div className="card-body Card-Body">
                <h5 className="card-title Card-Title">{todo.name}</h5>
                <h6 className="card-subtitle Card-Subtitle">{todo.address?.city}</h6>
            </div>
            {todo.hasTodosList && (
                <div className="card-footer">
                    {todo.todosList.map((task => (
                        <div className="card" key={task.id}>
                            <div className={`card-header ${task.completed ? 'bg-success' : 'bg-warning'}`}>{task.completed ? "Success" : "Warning"}</div>
                            <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                            </div>
                        </div>
                    )))}
                </div>
            )}
        </div>
    </div>
);

export default TodoItem;