import React, { useState, useEffect, useMemo, createContext } from 'react';
import KanbanBoardView from "./KanbanBoardView.jsx";
import './KanbanBoardStyles.less';

// Создаем контекст для передачи данных из KanbanBoardSmart в KanbanListIndexView
// eslint-disable-next-line react-refresh/only-export-components
export const KanbanBoardChildrenContext = createContext(null);

// --- Кастомный хук для загрузки данных ---
const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Начинаем загрузку
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error(`Ошибка при получении данных с ${url}:`, err);
                setError(err); // Устанавливаем ошибку
            } finally {
                setLoading(false); // Завершаем загрузку
            }
        };

        fetchData();
    }, [url]); // Перезапускаем хук, если URL изменился

    return { data, loading, error };
};

// --- Компонент KanbanBoardSmart ---
const KanbanBoardSmart = () => {
    // Используем кастомный хук для каждого источника данных
    const { data: comments, loading: commentsLoading, error: commentsError } = useFetchData('https://jsonplaceholder.typicode.com/comments');
    const { data: posts, loading: postsLoading, error: postsError } = useFetchData('https://jsonplaceholder.typicode.com/posts');
    const { data: users, loading: usersLoading, error: usersError } = useFetchData('https://jsonplaceholder.typicode.com/users');
    const { data: todos, loading: todosLoading, error: todosError } = useFetchData('https://jsonplaceholder.typicode.com/todos');

    // Проверяем, все ли исходные данные загружены и нет ли ошибок
    const allDataLoaded = !commentsLoading && !postsLoading && !usersLoading && !todosLoading &&
        !commentsError && !postsError && !usersError && !todosError;

    // Используем useMemo для выполнения всех трансформаций данных
    // Это гарантирует, что трансформации происходят только при изменении исходных данных
    const { postComments, userPosts, userTodos } = useMemo(() => {
        // Возвращаем пустые массивы, пока все данные не загружены
        if (!allDataLoaded) {
            return { postComments: [], userPosts: [], userTodos: [] };
        }

        // 1. Посты с прикрепленными комментариями
        const transformedPostComments = posts.map(post => {
            const relatedComments = comments.filter(comment => comment.postId === post.id);
            return {
                ...post,
                comments: relatedComments,
                commentCount: relatedComments.length,
                hasComments: relatedComments.length > 0,
            };
        });

        // 2. Пользователи с прикрепленными постами
        const transformedUserPosts = users.map(user => {
            const relatedPosts = posts.filter(post => post.userId === user.id);
            return {
                ...user,
                posts: relatedPosts,
                hasPosts: relatedPosts.length > 0,
            };
        });

        // 3. Пользователи с прикрепленными задачами (todos)
        const transformedUserTodos = users.map(user => {
            const relatedTodosList = todos.filter(todo => todo.userId === user.id);
            return {
                ...user,
                todosList: relatedTodosList,
                hasTodosList: relatedTodosList.length > 0,
            };
        });

        return {
            postComments: transformedPostComments,
            userPosts: transformedUserPosts,
            userTodos: transformedUserTodos
        };
    }, [comments, posts, users, todos, allDataLoaded]); // Зависимости для useMemo

    const contextValue = useMemo(() => ({
        comments: comments, // Ежедневные задачи
        posts: postComments, // Глобальные задачи
        users: userPosts, // Сотрудники и их задачи
        todos: userTodos // Выполненные или более неактуальные задачи
    }), [comments, postComments, userPosts, userTodos]);

    return (
        <KanbanBoardChildrenContext.Provider value={contextValue}>
            <KanbanBoardView />
        </KanbanBoardChildrenContext.Provider>
    );
};

export default KanbanBoardSmart;