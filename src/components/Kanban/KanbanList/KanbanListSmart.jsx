import React, { useState, useEffect, useMemo } from 'react';
import KanbanListView from './KanbanListView.jsx'; // Импортируем презентационный компонент

// Этот компонент будет отвечать за логику и состояние
const KanbanListSmart = React.memo(({ index, comments, posts, users, todos }) => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [types, setTypes] = useState([]);
    const [preLoader, setPreLoader] = useState(true);

    // Используем useMemo для мемоизации, чтобы избежать ненужных пересчетов
    // Преобразуем Set в Array, если данные приходят в виде Set
    const dataArrays = useMemo(() => {
        return [comments, posts, users, todos].map(data => Array.from(data || []));
    }, [comments, posts, users, todos]);

    const visibleData = useMemo(() => {
        return dataArrays.map(data => data.slice(0, visibleCount));
    }, [dataArrays, visibleCount]);

    // Обработчик для кнопки "Показать больше"
    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    // Эффект для имитации прелоадера
    useEffect(() => {
        const fetchPreLoader = async () => {
            await new Promise(resolve => setTimeout(resolve, 300));
            setPreLoader(false);
        };
        fetchPreLoader();
    }, []);

    // Эффект для имитации получения типов секций
    useEffect(() => {
        const fetchTypes = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const types = ['comment', 'post', 'user', 'todo'];
                    resolve(types);
                }, 100);
            });
        };

        const getTypes = async () => {
            try {
                const fetchedTypes = await fetchTypes();
                setTypes(fetchedTypes);
            } catch (error) {
                console.error("Ошибка при получении данных типов секций: ", error);
                setTypes([]);
            }
        };

        getTypes();
    }, []);

    // Определяем, какие данные и тип будут переданы в KanbanListView
    // В зависимости от индекса, выбираем нужный массив данных и тип
    const currentItemsVisible = visibleData[index];
    const currentType = types[index]; // Может быть undefined, пока types не загружены

    // Определяем, нужно ли показывать кнопку "Показать больше"
    const showLoadMoreButton = index >= 0 && index < dataArrays.length && dataArrays[index].length > visibleCount;

    return (
        <KanbanListView
            preLoader={preLoader}
            itemsVisible={currentItemsVisible} // Передаем только те данные, которые должны быть видны
            type={currentType} // Передаем тип для текущей секции
            visibleCount={visibleCount} // Передаем, если DataCardRendererSmart это требует
            showLoadMoreButton={showLoadMoreButton}
            onShowMore={handleShowMore} // Передаем функцию-обработчик
        />
    );
});

export default KanbanListSmart;
