import './App.css';
import React from "react";
import TableContainer from "./componentsContainer/Table/TableContainer";
import {columns} from "./componentsContainer/Table/columns";

function App() {
  return (
    <div className="App">
      <TableContainer columns={columns}/>
    </div>
  );
}

export default App;
