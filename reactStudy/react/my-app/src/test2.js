import React, {useState} from "react";
import { AgGridReact } from "ag-grid-react";

const Test2 = ({sendData}) => {
    const [rowData,setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
      ]);
    
      const [columnDefs,setColumnDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
      ]);

      sendData(rowData,columnDefs);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default Test2;
