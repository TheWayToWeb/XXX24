// Подключаем библиотеку React, хуки useState
import React, { useState } from 'react';
/* Подключаем родительский презентационный компонент вертикального меню */
import VerticalMenuView from "./VerticalMenuView.jsx";
// Подключаем функцию, возвращающую наш объект родительского контекста
import { useToggleButtonStretchValue } from "./toggleButtonStretchContext.js";
// Подключаем провайдер родительского контекста
import ToggleButtonStretchProvider from "./ToggleButtonStretchProvider.jsx";
// Объявляем умный компонент вертикального меню
const VerticalMenuSmart = () => {
    // Инициализируем состояние смены представления на кнопке
    const [expanded, setExpanded] = useState(false);
    // Инициализируем состояние изменения ширины на которую растягивается кнопка
    const [stretchWidth, setStretchWidth] = useState(100);
    // Функция смены ширины бокового меню
    const stretchVerticalNavbar = () => {
      if (expanded) {
        // состояние изменяющее ширину боковой панели / бокового меню
        setStretchWidth(prev => prev / 2);
      } else {
        setStretchWidth(prev => prev * 2);
      }
      // состояние изменения представления кнопки меню
      setExpanded(prev => !prev);
    };

    // Объект контекста для взаимодействия родительского элемента с дочерними
    const toggleButtonStretchedContextValue = useToggleButtonStretchValue(
        expanded,
        stretchVerticalNavbar,
        stretchWidth
    );

  return (
      <ToggleButtonStretchProvider
          value={toggleButtonStretchedContextValue}
      >
          <VerticalMenuView />
      </ToggleButtonStretchProvider>
  );
};

export default VerticalMenuSmart;