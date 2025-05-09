import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DropdownIndexView from "../Dropdown/DropdownIndexView.jsx";
import FilterSearcherIndexView from "../FilterSearch/FilterSearcherIndexView.jsx";
import TabsRouterIndexView from "../TabsRouter/TabsRouterIndexView.jsx";
import MainMenuIndexView from "../MainMenu/MainMenuIndexView.jsx";
import MainTableIndexView from "../MainTable/MainTableIndexView.jsx";

const DataTableSection = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 col-md-3 col-lg-3">
                    <DropdownIndexView />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-9">
                    <MainMenuIndexView />
                    <FilterSearcherIndexView
                        searchFields={[
                            { placeholder: "Поиск по названию", initialValue: "" },
                            { placeholder: "Поиск по категории", initialValue: "" },
                            { placeholder: "Поиск по автору", initialValue: "" },
                        ]}
                    />
                    <BrowserRouter>
                        <TabsRouterIndexView />
                        <Routes>
                            <Route path="/" element={<MainTableIndexView />} />
                            {/* Другие маршруты для 'Дерево' и 'Канбан', если они есть */}
                            {/* <Route path="/tree" element={<TreeView />} /> */}
                            {/* <Route path="/kanban" element={<KanbanView />} /> */}
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default DataTableSection;