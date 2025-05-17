import React, { useState, useEffect } from 'react';
import ContainerFluidView from "../../Application/ContainerFluid/ContainerFluidView.jsx";
import BoardSectionView from "./BoardSectionView.jsx";
import './KanbanBoardStyles.css';

const KanbanBoardSmart = ({ numberOfBoards = 4 }) => {
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState([]);
    const [postComments, setPostComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [todos, setTodos] = useState([]);
    const [userTodos, setUserTodos] = useState([]);
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
        // Этот эффект будет запущен после получения users и posts
        if (users.length > 0 && posts.length > 0) {
            const newUserPosts = users.map(user => {
                const relatedPosts = posts.filter(post => post.userId === user.id);

                return {
                    ...user, // клонируем все поля из users,
                    posts: relatedPosts,
                    hasPosts: relatedPosts.length > 0
                };
            });
            setUserPosts(newUserPosts);
        }
    }, [posts, users]);

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

    useEffect(() => {
        if (users.length > 0 && todos.length > 0) {
            const newUserTodos = users.map((user) => {
                const relatedTodosList = todos.filter(todo => todo.userId === user.id);

                return {
                    ...user,
                    todosList: relatedTodosList,
                    hasTodosList: relatedTodosList.length > 0
                };
            });
            setUserTodos(newUserTodos);
        }
    }, [users, todos]);

    return (
        <ContainerFluidView>
            {boards.map((_, index) => (
                <div
                    className="col-12 col-sm-12 col-md-4 col-lg-3"
                    key={index}
                >
                    <div className="BoardSectionContainer">
                        <BoardSectionView
                            index={index}
                            comments={index === 0 ? comments : []}
                            posts={index === 1 ? postComments: []}
                            users={index === 2 ? userPosts: []}
                            todos={index === 3 ? userTodos: []}
                        />
                    </div>
                </div>
            ))}
        </ContainerFluidView>
    );
}

export default KanbanBoardSmart;