import React from 'react';
import { VerticalMenu } from "../../components/UI/Navigation/index.js";
//import FilterSearcherIndexView from "../../FilterSearch/FilterSearcherIndexView.jsx";
import MovingMenuIndexView from "../../components/Others/oldest/NavigationMenu/MovingMenu/MovingMenuIndexView.jsx";
import AppNavigatorView from "../../components/Others/Temporarily/AppNavigator/AppNavigatorView.jsx";
import './AppLayout.less';

const AppFoundationView = () => {
    return (
        <>
            <div className="SidebarMenuContainer">
                <VerticalMenu />
            </div>
            {/*
            <FilterSearcherIndexView />
                <MovingMenuIndexView />
                <AppNavigatorView />
            */}
            </>
    );
}

export default AppFoundationView;