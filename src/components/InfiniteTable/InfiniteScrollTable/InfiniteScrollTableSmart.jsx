import React, { useEffect, useState } from 'react';
import InfiniteScrollTableView from './InfiniteScrollTableView.jsx';

const InfiniteScrollTableSmart = () => {
    const [comments, setComments] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [columnHeader, setColumnHeader] = useState(['#', 'Name', 'Email', 'Comment']);
    const [editingHeaderIndex, setEditingHeaderIndex] = useState(null);
    const [editingCell, setEditingCell] = useState({ rowIndex: null, columnKey: null });
    const [inputValue, setInputValue] = useState('');

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
            const data = await response.json();
            setComments(prevComments => prevComments.concat(data));
            setPage(prevPage => prevPage + 1);
            if (data.length < 10) {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    const handleHeaderEditClick = (index) => {
        setEditingHeaderIndex(index);
        setInputValue(columnHeader[index]);
    };

    const handleHeaderBlur = (index) => {
        const updatedHeaders = [...columnHeader];
        updatedHeaders[index] = inputValue;
        setColumnHeader(updatedHeaders);
        setEditingHeaderIndex(null);
    };

    const handleEditClick = (rowIndex, columnKey) => {
        setEditingCell({ rowIndex, columnKey });
        setInputValue(comments[rowIndex][columnKey]);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        if (editingCell.rowIndex !== null && editingCell.columnKey) {
            const updatedComments = [...comments];
            updatedComments[editingCell.rowIndex][editingCell.columnKey] = inputValue;
            setComments(updatedComments);
            setEditingCell({ rowIndex: null, columnKey: null });
        }
    };

    return (
        <InfiniteScrollTableView
            comments={comments}
            hasMore={hasMore}
            fetchComments={fetchComments}
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
    );
};

export default InfiniteScrollTableSmart;