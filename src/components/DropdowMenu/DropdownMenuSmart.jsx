import React, { useState, createContext, useMemo } from 'react';
import DropdownMenuView from "./DropdownMenuView.jsx";
// создаем контекст для растяжения и сжатия выпадающего списка
// eslint-disable-next-line react-refresh/only-export-components
export const ButtonStretchContext = createContext(null);

const DropdownMenuSmart = () => {
    const [expanded, setExpanded] = useState(false);
    const [stretchWidth, setStretchWidth] = useState(100);

    // создаем функцию для обработки сжатия бокового меню
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleStretchSideMenu = () => {
      if (expanded) {
        setStretchWidth(prev => prev / 2);
      } else {
        setStretchWidth(prev => prev * 2);
      }

      setExpanded(prev => !prev);
    };

    // Оборачиваем в контекст необходимые свойства состояний
    const buttonStretchContextValue = useMemo(() => ({
      canStretch: expanded,
      changeDropdownButtonWidth: handleStretchSideMenu,
      stretchSideMenuWidth: stretchWidth
    }), [expanded, handleStretchSideMenu, stretchWidth]);

  return (
      <ButtonStretchContext.Provider value={buttonStretchContextValue}>
        <DropdownMenuView show="null" onToggle="null"/>
      </ButtonStretchContext.Provider>
  );
};

export default DropdownMenuSmart;