import React from 'react';
import './App.css'
import SidebarSmart from "./components/TopMenu/SidebarSmart.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainTableView from "./components/MainTableView/MainTableView.jsx";


function App() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <SidebarSmart />
                </div>
                <div className="col-md-9 col-lg-10">
                    <MainTableView />
                </div>
            </div>
        </div>
    </>
  )
}

export default App
