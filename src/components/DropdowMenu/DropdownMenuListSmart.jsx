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
                        { id: 1, innerText: "Приходы", path: "/coming", demonstrated: false },
                        { id: 2, innerText: "Расходы", path: "/expenses", demonstrated: false },
                        { id: 3, innerText: "Задание", path: '/tasks', demonstrated: false },
                        { id: 4, innerText: "Остатки", path: '/remains', demonstrated: false },
                        { id: 5, innerText: "Визуализация", path: "/vision", demonstrated: false },
                        { id: 6, innerText: "Админ", path: "/", demonstrated: true },
                        { id: 7, innerText: "Поддержка", path: "/support", demonstrated: false },
                        { id: 8, innerText: "Прочее", path: "/others", demonstrated: false },
                        { id: 9, innerText: "Персональное", path: "/private", demonstrated: false }
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
