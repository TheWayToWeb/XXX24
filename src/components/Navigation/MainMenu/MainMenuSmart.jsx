import React, { useState, useEffect } from 'react';
import MainMenuView from "./MainMenuView.jsx";

const MainMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Имитация запроса к серверу (по API) для получения пунктов меню
        const fetchMenuItems = async () => {
          return new Promise((resolve) => {
              setTimeout(() => {
                  const menuItems = [
                      {id: 1, name: 'Приходы', href: '/', isActive: true },
                      {id: 2, name: 'Расходы', href: '/' },
                      {id: 3, name: 'Задание', href: '/' },
                      {id: 4, name: 'Остатки', href: '/' },
                      {id: 5, name: 'Визуализация', href: '/' },
                      {id: 6, name: 'Админ', href: '/' },
                      {id: 7, name: 'Поддержка', href: '/' },
                      {id: 8, name: 'Прочее', href: '/' },
                      {id: 9, name: 'Персональное', href: '/' }
                  ];
                  resolve(menuItems);
              }, 500); // Имитация задержки в 1 сек
          });
        };

        const getMenuItems = async () => {
            try {
                const menuItems = await fetchMenuItems();
                setMenuItems(menuItems);
            } catch (error) {
                console.error("Ошибка при получении данных пунктов меню: ", error);
                setMenuItems([]);
            }
        }

        getMenuItems();
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <MainMenuView
            isActive={isActive}
            onToggleMenu={toggleMenu}
            menuItems={menuItems}
        />
    );
};

export default MainMenu;