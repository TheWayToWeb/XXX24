import React from 'react';
import FilterSearcherSmart from "./FilterSearcherSmart.jsx";
import './FilterSearcherIndexStyles.css';

const FilterSearcherIndexView = () => {
    return (
        <div className="container">
            <div className="FilterSearchGroup">
                <div className="FilterSearchGroup-Item">
                    <FilterSearcherSmart />
                </div>
                <div className="FilterSearchGroup-Item">
                    <FilterSearcherSmart />
                </div>
                <div className="FilterSearchGroup-Item">
                    <FilterSearcherSmart />
                </div>
            </div>
        </div>
    );
}

export default FilterSearcherIndexView;
