import React, { useState, useEffect } from 'react';
import FilterSearcherSmart from "./FilterSearcherSmart.jsx";
import './FilterSearcherIndexStyles.css';

const FilterSearcherIndexView = React.memo(() => {
    const [searchFields, setSearchFields] = useState([]);

    // Эффект для получения данных по API
    useEffect(() => {
        const loadFields = async () => {
            try {
                // имитация асинхронного запроса к серверу
                await new Promise(resolve => setTimeout(resolve, 1000));
                const fetchedFields = [
                    { placeholder: "Поиск по названию", initialValue: "" },
                    { placeholder: "Поиск по категории", initialValue: "" },
                    { placeholder: "Поиск по автору", initialValue: "" },
                ];
                setSearchFields(fetchedFields)
            } catch (error) {
                console.error("Ошибка при получении данных поиска: ", error);
                setSearchFields([]);
            }
        };

        loadFields();
    }, []);
    return (
        <div className="FilterSearchSection">
            {searchFields.map((field, index) => (
                <div key={index} className="FilterSearchItemContainer">
                    <FilterSearcherSmart placeholder={field.placeholder} initialValue={field.initialValue} />
                </div>
            ))}
        </div>
    );
});

export default FilterSearcherIndexView;
