import React, { useEffect, useState } from 'react';
import './MainTableStyles.css';

const MainTableView = () => {
    const [comments, setComments] = useState([]); // Состояние для хранения данных комментариев
    const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки

    useEffect(() => {
        // Функция для получения данных из API
        const fetchComments = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                const data = await response.json();
                setComments(data); // Устанавливаем данные в состояние
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setLoading(false); // Завершаем загрузку
            }
        };

        fetchComments(); // Вызываем функцию получения данных
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

    if (loading) {
        return <div>Загрузка...</div>; // Показываем сообщение о загрузке
    }

    return (
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
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default MainTableView;

