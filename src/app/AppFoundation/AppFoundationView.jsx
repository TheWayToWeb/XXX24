import React from 'react';
import { VerticalMenu } from "../../components/Navigation/index.js";
//import FilterSearcherIndexView from "../../FilterSearch/FilterSearcherIndexView.jsx";
import MovingMenuIndexView from "../../components/oldest/NavigationMenu/MovingMenu/MovingMenuIndexView.jsx";
import AppNavigatorView from "../../components/Temporarily/AppNavigator/AppNavigatorView.jsx";
import './AppFoundationStyles.css';

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