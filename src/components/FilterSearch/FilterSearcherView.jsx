import React, { useState } from "react";
import PropTypes from "prop-types"; // Импортируем PropTypes
import "./FilterSearcherStyles.css";

const FilterSearcherView = React.memo(({ items, isOpen, onInputClick, placeholder, value }) => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item.id);
    };

    return (
        <>
            <input type="text" className="form-control FilterSearcher" onClick={onInputClick} placeholder={placeholder} value={value} />
            {isOpen && (
                <ul className="list-group FilteredList">
                    {items.map((item) => (
                        <li className={`list-group-item FilteredList-Item  ${activeItem === item.id ? "FilteredList-Item_Active" : ""}`} key={item.id} onClick={() => handleItemClick(item)}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
});

FilterSearcherView.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            text: PropTypes.string.isRequired,
            // Добавьте другие ожидаемые свойства объекта item
        })
    ).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onInputClick: PropTypes.func.isRequired,
};

export default FilterSearcherView;
