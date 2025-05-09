import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderIndexView from "./components/Header/HeaderIndexView.jsx";
import DataTableSection from "./components/DataTableSection/DataTableSection.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderIndexView />
                <Routes>
                    <Route path="/" element={<DataTableSection />} />
                    {/* Другие маршруты для 'Дерево' и 'Канбан', если они есть */}
                    {/* <Route path="/tree" element={<TreeView />} /> */}
                    {/* <Route path="/kanban" element={<KanbanView />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
