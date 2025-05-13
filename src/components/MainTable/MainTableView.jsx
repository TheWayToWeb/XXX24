import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import NotifyLoadView from '../NotifyLoad/NotifyLoadView.jsx';
import EndMessageIndexView from '../EndMessage/EndMessageIndexView.jsx';
import TablePartView from './TablePartView.jsx'; // Импортируем компонент TablePartView
import './TableButtonsStyles.css';

const MainTableView = React.memo(
    ({
         comments,
         hasMore,
         fetchComments,
         columnHeader,
         editingHeaderIndex,
         editingCell,
         inputValue,
         handleHeaderEditClick,
         handleHeaderBlur,
         handleEditClick,
         handleInputChange,
         handleBlur,
     }) => {
        const [buttonsData, setButtonsData] = useState([]);
        const [buttonActive, setButtonActive] = useState(false);

        useEffect(() => {
            // Имитация асинхронной операции получения данных кнопок (запрос к API)
            const loadButtonsData = async () => {
                try {
                    // Задержка для имитации сетевого запроса
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    const fetchedDataControlButtons = [
                        { id: 1, text: '+', action: 'add' },
                        { id: 2, text: '-', action: 'substract' },
                        { id: 3, text: '0', action: 'counter'}
                    ];
                    setButtonsData(fetchedDataControlButtons);
                } catch (error) {
                    console.error("Ошибка при получении данных табличных кнопок: ", error);
                    setButtonsData([]);
                }
            };

            loadButtonsData();
        }, []); // эффект выполнится только один раз
        const handleButtonClick = () => {
            setButtonActive(!buttonActive);
        };

        return (
            <>
                <InfiniteScroll
                    dataLength={comments.length}
                    next={fetchComments}
                    hasMore={hasMore}
                    loader={<NotifyLoadView />}
                    endMessage={<EndMessageIndexView />}
                >
                    <TablePartView
                        comments={comments}
                        columnHeader={columnHeader}
                        editingHeaderIndex={editingHeaderIndex}
                        editingCell={editingCell}
                        inputValue={inputValue}
                        handleHeaderEditClick={handleHeaderEditClick}
                        handleHeaderBlur={handleHeaderBlur}
                        handleEditClick={handleEditClick}
                        handleInputChange={handleInputChange}
                        handleBlur={handleBlur}
                    />
                </InfiniteScroll>
                <div className="btn-group TableButtons">
                    {buttonsData.map((button) => (
                        <button
                            key={button.id}
                            type="button"
                            className={`{btn TableButton ${
                                buttonActive ? 'TableButton_Active' : ''
                            }}`}
                            onClick={() => handleButtonClick()}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </>
        );
    }
);

MainTableView.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
    hasMore: PropTypes.bool.isRequired,
    fetchComments: PropTypes.func.isRequired,
    columnHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
    editingHeaderIndex: PropTypes.number,
    editingCell: PropTypes.shape({
        rowIndex: PropTypes.number,
        columnKey: PropTypes.oneOf(['name', 'email', 'body']),
    }).isRequired,
    inputValue: PropTypes.string.isRequired,
    handleHeaderEditClick: PropTypes.func.isRequired,
    handleHeaderBlur: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
};

export default MainTableView;