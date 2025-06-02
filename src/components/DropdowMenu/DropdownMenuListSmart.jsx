import React, { useState, useEffect } from 'react';
import DropdownMenuListView from "./DropdownMenuListView.jsx"; // Импортируем презентационный компонент

const DropdownMenuListSmart = () => {
    const [active, setActive] = useState(null);
    const [sidebarItems, setSidebarItems] = useState([]);

    useEffect(() => {
        const fetchedSidebarItems = async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const data = [
                        { id: 1, text: 'Продажи', path: "/sales" },
                        { id: 2, text: 'Покупки', path: "/purchases" },
                        { id: 3, text: 'Производство', path: "/production" },
                        { id: 4, text: 'Склады', path: "/warehouses" },
                        { id: 5, text: 'Бухгалтерия', path: "/accounting" },
                        { id: 6, text: 'Справочники', path: "/directories" },
                        { id: 7, text: 'Отчеты', path: "/reports" },
                        { id: 6, text: 'Настройки', path: "/settings" }
                    ];
                    resolve(data);
                }, 500); // Имитация задержки в пол секунды
            });
        };

        const getSidebarItems = async () => {
            try {
                const sidebarItems = await fetchedSidebarItems();
                setSidebarItems(sidebarItems);
            } catch (error) {
                console.error("Ошибка при получении строк выпадающего меню: ", error);
                setSidebarItems([]);
            }
        };

        getSidebarItems();
    }, []);

    const handleClickLink = (item) => {
        setActive(item.id); // Устанавливаем активный пункт
    };

    return (
        <DropdownMenuListView
            initItems={sidebarItems}
            active={active}
            handleClickLink={handleClickLink}
        />
    );
};

export default DropdownMenuListSmart;
