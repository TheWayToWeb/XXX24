import React, { useState, createContext, useMemo } from 'react';
import DropdownMenuView from "./DropdownMenuView.jsx";
// Создаем контекст взаимодействия бокового меню с кнопкой
// eslint-disable-next-line react-refresh/only-export-components
export const ButtonStretchContext = createContext(null);

const DropdownMenuSmart = () => {
    // Инициализируем состояние смены представления на кнопке
    const [expanded, setExpanded] = useState(false);
    // Инициализируем состояние изменения ширины на которую растягивается кнопка
    const [stretchWidth, setStretchWidth] = useState(100);
    // Инициализируем ссылку на выпадающее меню
    // Функция смены ширины бокового меню
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleStretchSideMenu = () => {
      if (expanded) {
        // состояние изменяющее ширину боковой панели / бокового меню
        setStretchWidth(prev => prev / 2);
      } else {
        setStretchWidth(prev => prev * 2);
      }
      // состояние изменения представления кнопки меню
      setExpanded(prev => !prev);
    };

    // Контекст для взаимодействия с боковым меню и выпадающим списком
    const buttonStretchContextValue = useMemo(() => ({
        canStretch: expanded,
        changeDropdownButtonWidth: handleStretchSideMenu,
        stretchSideMenuWidth: stretchWidth,
    }), [
        expanded,
        handleStretchSideMenu,
        stretchWidth,
    ]);

  return (
      <ButtonStretchContext.Provider value={buttonStretchContextValue}>
        <DropdownMenuView
            canStretch={expanded}
            changeDropdownButtonWidth={handleStretchSideMenu}
            stretchSideMenuWidth={stretchWidth}
        />
      </ButtonStretchContext.Provider>
  );
};

export default DropdownMenuSmart;