import React from 'react';
import HeaderView from "./HeaderView.jsx";

const HeaderSmart = () => {
    const headerLinks = [
        { id: 1, text: 'Таблица', path: '/' },
        { id: 2, text: 'Дерево', path: '/tree' },
        { id: 3, text: 'Канбан', path: '/kanban' },
    ];

    return (
        <HeaderView links={headerLinks} />
    );
}

export default HeaderSmart;