import React from 'react';
import DropdownIndexView from "../Dropdown/DropdownIndexView.jsx";
import FilterSearcherIndexView from "../FilterSearch/FilterSearcherIndexView.jsx";
import MainMenuIndexView from "../MainMenu/MainMenuIndexView.jsx";
import MainTableIndexView from "../MainTable/MainTableIndexView.jsx";

const GridView = () => {

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <DropdownIndexView />
                </div>
                <div className="col-md-9 col-lg-10">
                    <MainMenuIndexView />
                    <FilterSearcherIndexView
                        searchFields={[
                            { placeholder: "Поиск по названию", initialValue: "" },
                            { placeholder: "Поиск по категории", initialValue: "" },
                            { placeholder: "Поиск по автору", initialValue: "" },
                        ]}
                    />
                    <MainTableIndexView />
                </div>
            </div>
        </div>
    );
}

export default GridView;

