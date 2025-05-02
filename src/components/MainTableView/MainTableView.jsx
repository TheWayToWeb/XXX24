import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NotifyLoadView from "../NotifyLoad/NotifyLoad.jsx";
import EndMessageView from "../EndMessage/EndMessageView.jsx";
import './MainTableStyles.css';

const MainTableView = () => {
    const [comments, setComments] = useState([]); // Состояние для хранения данных комментариев
    const [hasMore, setHasMore] = useState(true); // Начальное значение true, чтобы была возможность загрузки
    const [page, setPage] = useState(1);
    const [editingCell, setEditingCell] = useState({ rowIndex: null, columnKey: null }); // Состояние для отслеживания редактируемой ячейки
    const [inputValue, setInputValue] = useState(''); // Состояние для хранения значения ввода

    // Функция для получения данных из API
    const fetchComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
            const data = await response.json();
            setComments(prevComments => prevComments.concat(data)); // Обновляем состояние комментариев
            setPage(prevPage => prevPage + 1); // Увеличиваем номер страницы

            // Проверяем, есть ли еще данные для загрузки
            if (data.length < 10) {
                setHasMore(false); // Если загружено меньше 10 комментариев, значит больше нет
            }
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };

    useEffect(() => {
        fetchComments(); // Вызываем функцию получения данных
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

    const handleEditClick = (rowIndex, columnKey) => {
        setEditingCell({ rowIndex, columnKey });
        setInputValue(comments[rowIndex][columnKey]); // Устанавливаем текущее значение ячейки в input
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        if (editingCell.rowIndex !== null && editingCell.columnKey) {
            const updatedComments = [...comments];
            updatedComments[editingCell.rowIndex][editingCell.columnKey] = inputValue; // Обновляем значение в состоянии
            setComments(updatedComments); // Устанавливаем обновленные комментарии
            setEditingCell({ rowIndex: null, columnKey: null }); // Сбрасываем редактирование
        }
    };

    return (
        <>
            <InfiniteScroll
                dataLength={comments.length} // Общее количество загруженных комментариев
                next={fetchComments} // Функция для загрузки следующих данных
                hasMore={hasMore} // Есть ли еще данные для загрузки
                loader={<NotifyLoadView />} // Компонент загрузки
                endMessage={<EndMessageView />} // Сообщение о конце данных
            >
                <table className="table table-striped Table" style={{ width: '100%' }}>
                    <thead className="Table-Header">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comment</th>
                    </tr>
                    </thead>
                    <tbody className="Table-Body">
                    {comments.map((comment, index) => (
                        <tr key={comment.id}>
                            <td>{index + 1}</td> {/* Индекс + 1 для отображения номера */}
                            <td onClick={() => handleEditClick(index, 'name')}>
                                {editingCell.rowIndex === index && editingCell.columnKey === 'name' ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    />
                                ) : (
                                    comment.name
                                )}
                            </td>
                            <td onClick={() => handleEditClick(index, 'email')}>
                                {editingCell.rowIndex === index && editingCell.columnKey === 'email' ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    />
                                ) : (
                                    comment.email
                                )}
                            </td>
                            <td onClick={() => handleEditClick(index, 'body')}>
                                {editingCell.rowIndex === index && editingCell.columnKey === 'body' ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                    />
                                ) : (
                                    comment.body
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </InfiniteScroll>
            <div className="btn-group TableButtonGroup">
                <button
                        type="button"
                        className="btn btn-outline-primary TableButtonGroup-Button TableButtonGroup-Button_Active"
                        id="addRow"
                >
                    +
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary TableButtonGroup-Button"
                    id="deleteRow"
                >
                    -
                </button>
            </div>
        </>
    );
};

export default MainTableView;





