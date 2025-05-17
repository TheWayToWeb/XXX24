import React from 'react';
import ContainerFluidView from "../ContainerFluid/ContainerFluidView.jsx";
import DropdownIndexView from "../../Dropdown/DropdownIndexView.jsx";
import FilterSearcherIndexView from "../../FilterSearch/FilterSearcherIndexView.jsx";
import MainMenuIndexView from "../../Navigation/MainMenu/MainMenuIndexView.jsx";
import AppNavigatorView from "../AppNavigator/AppNavigatorView.jsx";


const AppFoundationView = () => {
    return (
        <ContainerFluidView>
            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
                <DropdownIndexView />
            </div>
            <div className="col-12 col-sm-8 col-md-9 col-lg-9">
                <MainMenuIndexView />
                <FilterSearcherIndexView />
                <AppNavigatorView />
            </div>
        </ContainerFluidView>
    );
}

export default AppFoundationView;