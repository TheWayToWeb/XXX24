import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerFluidView from "../ContainerFluid/ContainerFluidView.jsx";
import DropdownIndexView from "../Dropdown/DropdownIndexView.jsx";
import FilterSearcherIndexView from "../FilterSearch/FilterSearcherIndexView.jsx";
import TabsRouterIndexView from "../TabsRouter/TabsRouterIndexView.jsx";
import MainMenuIndexView from "../MainMenu/MainMenuIndexView.jsx";
import InfiniteScrollTableIndexView from "../InfiniteScrollTable/InfiniteScrollTableIndexView.jsx";
import TreeDataView from "../TreeDataView/TreeDataView.jsx";
import KanbanBoardIndexView from "../KanbanBoard/KanbanBoardIndexView.jsx";

const DataManagerView = () => {
    return (
        <ContainerFluidView>
            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
                <DropdownIndexView />
            </div>
            <div className="col-12 col-sm-8 col-md-9 col-lg-9">
                <MainMenuIndexView />
                <FilterSearcherIndexView />
                <BrowserRouter>
                    <TabsRouterIndexView />
                    <Routes>
                        <Route path="/" element={<InfiniteScrollTableIndexView />} />
                        <Route path="/tree" element={<TreeDataView />} />
                        <Route path="/kanban" element={<KanbanBoardIndexView />} />
                        {/* <Route path="/tree" element={<TreeView />} /> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </ContainerFluidView>
    );
}

export default DataManagerView;