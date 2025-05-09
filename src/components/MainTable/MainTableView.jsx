import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import InfiniteScroll from 'react-infinite-scroll-component';
import NotifyLoadView from "../NotifyLoad/NotifyLoadView.jsx";
import EndMessageIndexView from '../EndMessage/EndMessageIndexView.jsx';
import './MainTableStyles.css';
import './TableButtonsStyles.css';
import './InputEditerStyles.css';

const MainTableView = React.memo(({
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
                                      handleBlur
                                  }) => {
    const buttonsData = [
        {id: 1, text: '+'},
        {id: 2, text: '-'}
    ];
    const [buttonActive, setButtonActive] = useState(false);
    const handleButtonClick = () => {
        setButtonActive(!buttonActive)
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
                <table className="table Table" style={{ width: '100%' }}>
                    <thead className="Table-Header">
                    <tr>
                        {columnHeader.map((header, index) => (
                            <th
                                scope="col"
                                key={index}
                                onClick={() => handleHeaderEditClick(index)}
                            >
                                {editingHeaderIndex === index ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleHeaderBlur}
                                        autoFocus
                                        className="form-control InputEditer"
                                    />
                                ): (header
                                )}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="Table-Body">
                    {comments.map((comment, index) => (
                        <tr key={comment.id}>
                            <td>{index + 1}</td>
                            <td onClick={() => handleEditClick(index, 'name')}>
                                {editingCell.rowIndex === index && editingCell.columnKey === 'name' ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                        className="form-control InputEditer"
                                    />
                                ) : (
                                    comment.name
                                )}
                            </td>
                            <td onClick={() => handleEditClick(index, 'email')}>
                                {editingCell.rowIndex === index && editingCell.columnKey === 'email' ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                        className="form-control InputEditer"
                                    />
                                ) : (
                                    comment.email
                                )}
                            </td>
                            <td onClick={() => handleEditClick(index, 'body')}>
                                {editingCell.rowIndex === index && editingCell.columnKey === 'body' ? (
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        autoFocus
                                        className="form-control InputEditer"
                                    />
                                ) : (
                                    comment.body
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </InfiniteScroll>
            <div className="btn-group TableButtons">
                {
                    buttonsData.map((button) => (
                        <button
                            key={button.id}
                            type="button"
                            className={`{btn TableButton ${buttonActive ? 'TableButton_Active': ''}`}
                            id={`tableButton-${button.id}`}
                            onClick={() => handleButtonClick()}
                        >{button.text}</button>
                    ))
                }
            </div>
        </>
    );
});

MainTableView.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            // Добавьте другие ожидаемые свойства объекта comment
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