import React, { useState, useEffect, useRef } from 'react';
import TreeView from "./TreeView.jsx";
import './TreeStyles.css';
import './TreeList/TreeListStyles.css';

const TreeSmart = () => {
    // Меняем состояние для отслеживания открытого элемента
    const [openTree, setOpenTree] = useState(null);
    const [treeTitles, setTreeTitles] = useState([]);
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

    // тут будем получать данные по API
    useEffect(() => {
        const fetchDataTree = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();

                setTreeTitles(data);
            } catch (error) {
                console.error("Ошибка при загрузке заголовков дерева: ", error);
                setTreeTitles([]);
            }
        };

        fetchDataTree();
    }, []);

    return (
       <TreeView
           dropdownRef={dropdownRef}
           toggleTree={toggleTree}
           treeTitles={treeTitles}
           openTree={openTree}
       />
    );
};

export default TreeSmart;

