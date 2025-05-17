import React, { useState, useEffect } from 'react';
import './KanbanBoardStyles.css';
import CardManagerView from "../CardManager/CardManagerView.jsx";

const KanbanBoardView = ({ index, comments, posts, users, todos }) => {
    const dataArrays = [comments, posts, users, todos].map(data => Array.from(data));
    const [visibleCount, setVisibleCount] = useState(3);
    const [types, setTypes] = useState([]);

    const visibleData = dataArrays.map(data => data.slice(0, visibleCount));

    // Имитация запроса к API для получения типов секций
    useEffect(() => {
        const fetchTypes = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const types = ['comment', 'post', 'user', 'todo'];
                    resolve(types);
                }, 1000);
            });
        };

        const getTypes = async () => {
          try {
              const types = await fetchTypes();
              setTypes(types);
          } catch (error) {
              console.error("Ошибка при получении данных типов секций: ", error);
              setTypes([]);
          }
        };

        getTypes();
    }, []);

    const renderResultContentManager = () => {
        switch (index) {
            case 0:
                return (
                    <CardManagerView
                        itemsVisible={visibleData[0]}
                        type={types[0]}
                    />
                );
            case 1:
                return (
                    <CardManagerView
                        itemsVisible={visibleData[1]}
                        type={types[1]}
                    />
                );
            case 2:
                return (
                    <CardManagerView
                        itemsVisible={visibleData[2]}
                        type={types[2]}
                    />
                );
            case 3:
                return(
                    <CardManagerView
                        itemsVisible={visibleData[3]}
                        type={types[3]}
                    />
                );
        }
    }

    return (
        <div className="KanbanBoard">
            { renderResultContentManager() }

            {index >= 0 && index < dataArrays.length && dataArrays[index].length > visibleCount && (
                <button
                    className="btn ShowMore"
                    onClick={() => setVisibleCount(visibleCount + 3)}
                >
                    Показать больше
                </button>
            )}
        </div>
    );
};

export default KanbanBoardView;
