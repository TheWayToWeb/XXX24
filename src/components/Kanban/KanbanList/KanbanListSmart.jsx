import React, { useState, useEffect, useMemo } from 'react';
import KanbanListView from './KanbanListView.jsx'; // Импортируем презентационный компонент

// Этот компонент будет отвечать за логику и состояние
const KanbanListSmart = React.memo(({ index, comments, posts, users, todos }) => {
    // Объединяем объявления useState для краткости
    const [countVisibleItems, setCountVisibleItems] = useState(3);
    const [listType, setListType] = useState([]);
    const [preLoader, setPreLoader] = useState(true);

    // Используем useMemo для преобразования входных данных в массивы.
    // Выбираем только данные для текущего индекса сразу, чтобы избежать лишних пересчетов.
    const currentRawData = useMemo(() => {
        const allData = [comments, posts, users, todos];
        // Если index выходит за пределы, возвращаем пустой массив, чтобы избежать ошибок
        return Array.from(allData[index] || []);
    }, [index, comments, posts, users, todos]);

    // Вычисляем видимые данные только для текущего списка
    const currentVisibleData = useMemo(() => {
        return currentRawData.slice(0, countVisibleItems);
    }, [currentRawData, countVisibleItems]);

    // Обработчик для кнопки "Показать больше"
    const handleShowMore = () => {
        setCountVisibleItems(prevCount => prevCount + 3);
    };

    // Эффект для имитации прелоадера (упрощен)
    useEffect(() => {
        const timer = setTimeout(() => {
            setPreLoader(false);
        }, 300);
        return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }, []);

    // Эффект для имитации получения типов секций (упрощен)
    useEffect(() => {
        const fetchTypes = async () => {
            try {
                // Имитация задержки
                await new Promise(resolve => setTimeout(resolve, 100));
                const types = ['comment', 'post', 'user', 'todo'];
                setListType(types);
            } catch (error) {
                console.error("Ошибка при получении данных типов секций: ", error);
                setListType([]); // Устанавливаем пустой массив при ошибке
            }
        };
        fetchTypes();
    }, []); // Пустой массив зависимостей, эффект выполняется один раз при монтировании

    // Определяем текущий тип на основе загруженного массива listType
    const currentType = listType[index];

    // Определяем, нужно ли показывать кнопку "Показать больше"
    const showLoadMoreButton = currentRawData.length > countVisibleItems;

    return (
        <KanbanListView
            preLoader={preLoader}
            startVisibleData={currentVisibleData} // Передаем только те данные, которые должны быть видны
            currentType={currentType}             // Передаем тип для текущей секции
            countVisibleItems={countVisibleItems}
            showLoadMoreButton={showLoadMoreButton}
            onShowMore={handleShowMore}           // Передаем функцию-обработчик
        />
    );
});

export default KanbanListSmart;