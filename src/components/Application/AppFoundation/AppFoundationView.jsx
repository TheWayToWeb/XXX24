import React from 'react';
import ContainerFluidView from "../ContainerFluid/ContainerFluidView.jsx";
import DropdownMenuIndexView from "../../DropdowMenu/DropdownMenuIndexView.jsx";
import FilterSearcherIndexView from "../../FilterSearch/FilterSearcherIndexView.jsx";
import MovingMenuIndexView from "../../Navigation/MovingMenu/MovingMenuIndexView.jsx";
import AppNavigatorView from "../AppNavigator/AppNavigatorView.jsx";


const AppFoundationView = () => {
    return (
        <ContainerFluidView>
            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
                <DropdownMenuIndexView />
            </div>
            <div className="col-12 col-sm-8 col-md-9 col-lg-9">
                <MovingMenuIndexView />
                <FilterSearcherIndexView />
                <AppNavigatorView />
            </div>
        </ContainerFluidView>
    );
}

export default AppFoundationView;