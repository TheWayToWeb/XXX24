import React, { useState, useEffect } from 'react';
import './BoardSectionStyles.css';
import MultipleChoiceDataCardListIndexView from "../MultipleChoiceDataCardList/MultipleChoiceDataCardListIndexView.jsx";

const BoardSectionView = React.memo(({ index, comments, posts, users, todos }) => {
    const dataArrays = [comments, posts, users, todos].map(data => Array.from(data));
    const [visibleCount, setVisibleCount] = useState(3);
    const [types, setTypes] = useState([]);
    const [preLoader, setPreLoader] = useState(true);

    const visibleData = dataArrays.map(data => data.slice(0, visibleCount));

    useEffect(() => {
        const fetchPreLoader = async () => {
            // Имитация запроса к серверу для работы preLoader
            await new Promise(resolve => setTimeout(resolve, 300));
            // скрываем прелоадер
            setPreLoader(false);
        };

        fetchPreLoader();
    }, []);

    // Имитация запроса к API для получения типов секций
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
                    <MultipleChoiceDataCardListIndexView
                        itemsVisible={visibleData[0]}
                        type={types[0]}
                        visibleCount={visibleCount}
                    />
                );
            case 1:
                return (
                    <MultipleChoiceDataCardListIndexView
                        itemsVisible={visibleData[1]}
                        type={types[1]}
                        visibleCount={visibleCount}
                    />
                );
            case 2:
                return (
                    <MultipleChoiceDataCardListIndexView
                        itemsVisible={visibleData[2]}
                        type={types[2]}
                        visibleCount={visibleCount}
                    />
                );
            case 3:
                return(
                    <MultipleChoiceDataCardListIndexView
                        itemsVisible={visibleData[3]}
                        type={types[3]}
                        visibleCount={visibleCount}
                    />
                );
        }
    }

    return (
        <>
            {preLoader ? (
                <div className="spinner-border text-primary" />
            ) : (
                <div className="BoardSection">
                    { renderResultContentManager() }
                    {index >= 0 && index < dataArrays.length && dataArrays[index].length > visibleCount && (
                        <button
                            className="btn BoardSectionButton"
                            onClick={() => setVisibleCount(visibleCount + 3)}
                        >
                            Показать больше
                        </button>
                    )}
                </div>
            )}
        </>

    );
});

export default BoardSectionView;
