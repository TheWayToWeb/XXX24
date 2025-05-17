import React from 'react';
import PropTypes from 'prop-types';
import './TableStyles.css';
import TableCellEditorView from './TableCellEditorView.jsx'; // Импортируем TableCellEditorView

const TableView = React.memo(
    ({
         comments,
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
        return (
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
                                <TableCellEditorView
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleHeaderBlur}
                                    autoFocus
                                />
                            ) : (
                                header
                            )}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="Table-Body">
                {comments.map((comment, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td onClick={() => handleEditClick(index, 'name')}>
                            {editingCell.rowIndex === index &&
                            editingCell.columnKey === 'name' ? (
                                <TableCellEditorView
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            ) : (
                                comment.name
                            )}
                        </td>
                        <td onClick={() => handleEditClick(index, 'email')}>
                            {editingCell.rowIndex === index &&
                            editingCell.columnKey === 'email' ? (
                                <TableCellEditorView
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            ) : (
                                comment.email
                            )}
                        </td>
                        <td onClick={() => handleEditClick(index, 'body')}>
                            {editingCell.rowIndex === index &&
                            editingCell.columnKey === 'body' ? (
                                <TableCellEditorView
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    autoFocus
                                />
                            ) : (
                                comment.body
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
);

TableView.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
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

export default TableView;