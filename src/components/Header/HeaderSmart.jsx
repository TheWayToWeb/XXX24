import React from 'react';
import HeaderView from "./HeaderView.jsx";
import { BrowserRouter } from 'react-router-dom';

const HeaderSmart = () => {
    const headerLinks = [
        { id: 1, text: 'Таблица', path: '/table' },
        { id: 2, text: 'Дерево', path: '/tree' },
        { id: 3, text: 'Канбан', path: '/kanban' },
    ];

    return (
        <BrowserRouter>
            <HeaderView links={headerLinks} />
        </BrowserRouter>
    );
}

export default HeaderSmart;