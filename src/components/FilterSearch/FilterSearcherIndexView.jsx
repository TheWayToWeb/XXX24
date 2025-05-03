import React from 'react';
import PropTypes from 'prop-types'; // Импортируйте PropTypes
import FilterSearcherSmart from "./FilterSearcherSmart.jsx";
import './FilterSearcherIndexStyles.css';

const FilterSearcherIndexView = React.memo(({ searchFields }) => {
    return (
        <div className="container">
            <div className="FilterSearchGroup">
                {searchFields.map((field, index) => (
                    <div key={index} className="FilterSearchGroup-Item">
                        <FilterSearcherSmart placeholder={field.placeholder} initialValue={field.initialValue} />
                    </div>
                ))}
            </div>
        </div>
    );
});

FilterSearcherIndexView.propTypes = {
    searchFields: PropTypes.arrayOf(
        PropTypes.shape({
            placeholder: PropTypes.string,
            initialValue: PropTypes.string,
            // Добавьте другие специфичные пропсы для FilterSearcherSmart, если необходимо
        }).isRequired
    ).isRequired,
};

export default FilterSearcherIndexView;
