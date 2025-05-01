import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableContainerView from "./components/TableContainer/TableContainerView.jsx";
import DropdownContainerView from "./components/DropdownContainer/DropdownContainerView.jsx";


function App() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <DropdownContainerView />
                <TableContainerView />
            </div>
        </div>
    </>
  )
}

export default App
