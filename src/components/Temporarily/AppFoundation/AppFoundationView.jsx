import React, { useState } from 'react';
import { DropdownMenuSmart } from "../../Navigation";
import FilterSearcherIndexView from "../../FilterSearch/FilterSearcherIndexView.jsx";
import MovingMenuIndexView from "../../NavigationMenu/MovingMenu/MovingMenuIndexView.jsx";
import AppNavigatorView from "../AppNavigator/AppNavigatorView.jsx";
import './AppFoundationStyles.css';

const AppFoundationView = () => {
    /* Функционал добавления списка */
    const [items, setItems] = useState([]);
    const handleAddItem = () => {
        const newItem = `Элемент ${items.length + 1}`;
        setItems(items.concat(newItem));
    };
    /* Состояние для изменения ширины кнопки выпадающего списка */
    const [buttonWidth, setButtonWidth] = useState(100);

    /* Свойство в зависимости от которого изменяется высота выпадающего списка */
    const [expanded, setExpanded] = useState(false);
    /* Необходимо для изменения функционала высоты выпадающего списка */
    const toggle = () => {
      if (expanded) {
          setButtonWidth(prev => prev / 2);
      } else {
          setButtonWidth(prev => prev * 2);
      }
      setExpanded(prev => !prev);
    };

    return (
        <>
            <div>
                <button onClick={handleAddItem}>Добавить новый элемент</button>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div style={{ width: '200px', margin: '20px' }}>
                <button onClick={toggle} style={{
                    width: `${buttonWidth}px`,
                    transition: 'width 0.5s ease'
                }}>
                    {expanded ? 'Сжать список': 'Растянуть список'}
                </button>

                <div style={{
                    width: `${buttonWidth}px`,
                    transition: 'width 0.5s ease'
                }}>
                    <ul style={{
                        padding: 0,
                        margin: 0,
                    }}>
                        <li>Элемент 1</li>
                        <li>Элемент 2</li>
                        <li>Элемент 3</li>
                        <li>Элемент 4</li>
                        <li>Элемент 5</li>
                    </ul>
                </div>
            </div>

            <div className="SidebarMenuContainer">
                <DropdownMenuSmart />
            </div>
            {/*
            <FilterSearcherIndexView />
                <MovingMenuIndexView />
                <AppNavigatorView />
            */}
            </>
    );
}

export default AppFoundationView;