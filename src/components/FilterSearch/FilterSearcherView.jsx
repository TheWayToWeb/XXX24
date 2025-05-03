import React, { useState } from 'react';
import './FilterSearcherStyles.css';

const FilterSearcherView = ({ items, isOpen,onInputClick }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item.id);
    };

    return (
        <>
            <input
                type="text"
                className="form-control FilterSearcher"
                onClick={onInputClick}
            />
            {isOpen && (
                <ul className="list-group FilteredList">
                    {items.map((item) => (
                        <li className={`list-group-item FilteredList-Item  ${activeItem === item.id ? 'FilteredList-Item_Active' : ''}`}
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default FilterSearcherView;