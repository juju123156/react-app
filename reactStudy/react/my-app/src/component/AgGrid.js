import React from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const AgGrid = (props) => {
  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          rowData={props.rowData}
          columnDefs={props.columnDefs}
          defaultColDef={{
            sortable: true,
            resizable: true,
            flex: true,
          }}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default AgGrid;
