import React from 'react';
import BoardView from "../Board/BoardView.jsx";
import './KanbanBoardView.css';

const KanbanBoardView = ({ numberOfBoards = 4 }) => { // Добавляем props для количества досок по умолчанию
    const boards = Array.from({ length: numberOfBoards }); // Создаем массив нужной длины

    return (
        <div className="KanbanContainer">
            <div
                className="container-fluid"
            >
                <div className="row">
                    {boards.map((_, index) => (
                        <div
                            className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                            key={index} // Важно добавить уникальный key при использовании map
                        >
                            <div className="KanbanItem">
                                <BoardView />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KanbanBoardView;