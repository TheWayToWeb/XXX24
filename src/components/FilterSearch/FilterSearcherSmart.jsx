import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterSearcherView from "./FilterSearcherView.jsx";

const FilterSearcherSmart = ({ placeholder, initialValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleInputClick = () => {
        setIsOpen(!isOpen);
    };
    const items = [
        {id: 1, text: "Первый элемент"},
        {id: 2, text: "Второй элемент"},
        {id: 3, text: "Третий элемент"}
    ];

    return (
        <FilterSearcherView
            items={items}
            isOpen={isOpen}
            onInputClick={handleInputClick}
            placeholder={placeholder}
            value={initialValue}
        />
    );
};

FilterSearcherSmart.propTypes = {
    placeholder: PropTypes.string,
    initialValue: PropTypes.string,
};

export default FilterSearcherSmart;