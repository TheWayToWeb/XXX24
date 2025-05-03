import React from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import InfiniteScroll from 'react-infinite-scroll-component';
import NotifyLoadView from "../NotifyLoad/NotifyLoadView.jsx";
import EndMessageIndexView from '../EndMessage/EndMessageIndexView.jsx';
import './MainTableStyles.css';

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
    return (
        <>
            <InfiniteScroll
                dataLength={comments.length}
                next={fetchComments}
                hasMore={hasMore}
                loader={<NotifyLoadView />}
                endMessage={<EndMessageIndexView />}
            >
                <table className="table table-striped Table" style={{ width: '100%' }}>
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
                                        className="form-control Input-Editer"
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
                                        className="form-control Input-Editer"
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
                                        className="form-control Input-Editer"
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
                                        className="form-control Input-Editer"
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
            <div className="btn-group TableButtonGroup">
                <button
                    type="button"
                    className="btn btn-outline-primary TableButtonGroup-Button TableButtonGroup-Button_Active"
                    id="addRow"
                >
                    +
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary TableButtonGroup-Button"
                    id="deleteRow"
                >
                    -
                </button>
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