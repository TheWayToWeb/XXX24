import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './MainTableStyles.css';

const MainTableView = () => {
    const [comments, setComments] = useState([]); // Состояние для хранения данных комментариев
    const [hasMore, setHasMore] = useState(true); // Начальное значение true, чтобы была возможность загрузки
    const [page, setPage] = useState(1);

    // Функция для получения данных из API
    const fetchComments = async () => {
        try {
            //Используем параметры
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
            const data = await response.json();
            setComments(prevComments => [...prevComments, ...data]); // Обновляем состояние комментариев
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

    return (
        <InfiniteScroll
            dataLength={comments.length} // Общее количество загруженных комментариев
            next={fetchComments} // Функция для загрузки следующих данных
            hasMore={hasMore} // Есть ли еще данные для загрузки
            loader={<h4>Загрузка...</h4>} // Компонент загрузки
            endMessage={<p>Данных больше нет</p>} // Сообщение о конце данных
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
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </InfiniteScroll>
    );
};

export default MainTableView;




