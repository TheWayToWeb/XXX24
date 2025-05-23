import React, { useState, useEffect, useRef } from 'react';
import TreeView from "./TreeView.jsx";
import './TreeStyles.css';
import './TreeList/TreeListStyles.css';

const TreeSmart = () => {
    // Меняем состояние для отслеживания открытого элемента
    const [openTree, setOpenTree] = useState(null);
    const [treeTitles, setTreeTitles] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const toggleTree = (id) => {
        setOpenTree(prev => (prev === id ? null : id)); // Переключаем состояние
    };
    const dropdownRef = useRef(null);

    const handleClickOutsideTree = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenTree(false);
        }
    };

    useEffect(() => {
        // Добавляем обработчик события на документ
        document.addEventListener('mousedown', handleClickOutsideTree);

        // Удаляем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideTree);
        };
    }, []);

    const fetchTreeTitles = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=30`);
            const treeDataTitles = await response.json();

            setTreeTitles(prevTitles=> prevTitles.concat(treeDataTitles));
            setPage(prevPage => prevPage + 1);
            setHasMore(treeDataTitles.length > 10);
        } catch (error) {
            console.error("Ошибка при загрузке заголовков дерева: ", error);
            setTreeTitles([]);
            setHasMore(false);
        }
    };

    // тут будем получать данные по API
    useEffect(() => {
        fetchTreeTitles();
    }, []);

    return (
       <TreeView
           dropdownRef={dropdownRef}
           toggleTree={toggleTree}
           treeTitles={treeTitles}
           openTree={openTree}
           fetchMoreData={fetchTreeTitles}
           hasMore={hasMore}
       />
    );
};

export default TreeSmart;

