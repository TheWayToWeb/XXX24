import React from 'react';
import TabsRouterView from "./TabsRouterView.jsx";

const TabsRouterSmart = () => {
    const headerLinks = [
        { id: 1, text: 'Таблица', path: '/' },
        { id: 2, text: 'Дерево', path: '/tree' },
        { id: 3, text: 'Канбан', path: '/kanban' },
    ];

    return (
        <TabsRouterView links={headerLinks} />
    );
}

export default TabsRouterSmart;