import React from 'react';

const FilterSearcherView = ({ items, isOpen,onInputClick }) => {
    return (
        <>
            <input
                type="text"
                className="form-control"
                onClick={onInputClick}
            />
            {isOpen && (
                <ul className="list-group">
                    {items.map((item) => (
                        <li className="list-group-item" key={item.id}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default FilterSearcherView;