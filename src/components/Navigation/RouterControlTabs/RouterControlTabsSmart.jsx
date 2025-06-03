import React, { useState, useEffect } from 'react';
import RouterControlTabsView from "./RouterControlTabsView.jsx";

const RouterControlTabsSmart = () => {
    const [routerLinks, setRouterLinks] = useState([]);

    useEffect(() => {
        const fetchRouterLinks = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const routes = [
                { id: 1, text: 'Таблица', route: '/' },
                { id: 2, text: 'Дерево', route: '/tree' },
                { id: 3, text: 'Канбан', route: '/kanban' },
            ];

            setRouterLinks(routes)
        };

        fetchRouterLinks();
    }, []);

    return (
        <RouterControlTabsView links={routerLinks} />
    );
}

export default RouterControlTabsSmart;