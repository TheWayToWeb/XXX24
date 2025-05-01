import React, { useState } from 'react';
import SidebarView from "./SidebarView.jsx"; // Импортируем презентационный компонент

const SidebarSmart = () => {
    const [active, setActive] = useState(null);

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

    const handleClickLink = (item) => {
        setActive(item.id); // Устанавливаем активный пункт
    };

    return (
        <>
            <SidebarView
                initItems={data}
                active={active}
                handleClickLink={handleClickLink}
            />
        </>
    );
};

export default SidebarSmart;
