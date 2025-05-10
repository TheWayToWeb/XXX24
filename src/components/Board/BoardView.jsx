import React from 'react';
import './BoardStyles.css';

const BoardView = () => {
    const postsData = [
        {
            id: 1,
            fullName: "Шестерня привода",
            detail: "Ведущая",
            stuff: "Сталь 45",
            task: "Обеспечить вращение вала",
            status: "В наличии"
        },
        {
            id: 2,
            fullName: "Корпус подшипника",
            detail: "Опорный",
            stuff: "Чугун СЧ20",
            task: "Фиксация подшипника",
            status: "Изготовление"
        },
        {
            id: 3,
            fullName: "Вал карданный",
            detail: "Передаточный",
            stuff: "Сталь 40Х",
            task: "Передача крутящего момента",
            status: "Готов к отгрузке"
        }
    ];
    return (
        <div className="Board">
            <div className="container-fluid">
                <div className="row">
                    {
                        postsData.map((post) => (
                            <div
                                className="col-sm-12"
                                key={post.id}
                            >
                                <div className="card Card">
                                    <div className="card-body Card-Body">
                                        <h5 className="card-title Card-Title">{post.fullName}</h5>
                                        <h6 className="card-subtitle Card-Subtitle">{post.detail}</h6>
                                        <p className="card-text Card-Text">{post.stuff}</p>
                                        <p className="card-text Card-Text">{post.task}</p>
                                        <p className="card-text Card-Text">{post.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default BoardView;