import React, { useState } from 'react';
import FilterSearcherView from "./FilterSearcherView.jsx";

const FilterSearcherSmart = () => {
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
        />
    );
};

export default FilterSearcherSmart;