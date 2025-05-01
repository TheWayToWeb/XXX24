import React from 'react';
import MainMenuView from "../MainMenu/MainMenuView.jsx";
import MainTableView from "../MainTableView/MainTableView.jsx";
import './TableContainer.css'

const TableContainerView = () => {
    return (
        <div className="col-md-9 col-lg-10 TableContainer">
            <MainMenuView />
            <MainTableView/>
        </div>
    );
};

export default TableContainerView;