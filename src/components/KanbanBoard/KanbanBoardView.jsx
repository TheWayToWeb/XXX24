import React, { useState, useEffect } from 'react';
import BoardView from "../Board/BoardView.jsx";
import './KanbanBoardView.css';

const KanbanBoardView = ({ numberOfBoards = 4 }) => {
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postComments, setPostComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const boards = Array.from({ length: numberOfBoards });

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Ошибка при получении комментариев:", error);
            }
        };

        fetchComments();
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Ошибка при получении постов:", error);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        // Этот эффект будет запущен, после получения posts и comments
        if (posts.length > 0 && comments.length > 0) {
            const newPostComments = posts.map(post => {
                const relatedComments = comments.filter(comment => comment.postId === post.id);
                return {
                    ...post, // Копируем все поля из поста
                    comments: relatedComments, // Добавляем массив связанных комментариев
                    commentCount: relatedComments.length, // Добавляем количество комментариев
                    hasComments: relatedComments.length > 0, // Добавляем булево значение, есть ли комментарии
                    // Добавляем остальные поля
                };
            });
            setPostComments(newPostComments);
        }
    }, [posts, comments]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Ошибка при получении списка пользователей: ", error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error("Ошибка при получении списка заданий: ", error)
            }
        }

        fetchTodos();
    }, []);

    return (
        <div className="KanbanContainer">
            <div
                className="container-fluid"
            >
                <div className="row">
                    {boards.map((_, index) => (
                        <div
                            className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                            key={index}
                        >
                            <div className="KanbanItem">
                                <BoardView
                                    index={index}
                                    comments={index === 0 ? comments : []}
                                    postComments={index === 1 ? postComments: []}
                                    users={index === 2 ? users: []}
                                    todos={index === 3 ? todos: []}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KanbanBoardView;