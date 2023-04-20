import React, { useCallback } from 'react';


const GridExample = () => {
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState(rowDataA);
    const [columnDefs, setColumnDefs] = useState([
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
    ]);

// specify the data
const rowDataA = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Aston Martin', model: 'DBX', price: 190000 },
  ];
  
  const rowDataB = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'BMW', model: 'M50', price: 60000 },
    { make: 'Aston Martin', model: 'DBX', price: 190000 },
  ];



// useCallback으로 함수 재용하기> setRowData를 재사용하는듯
const onRowDataA = useCallback(() => {
    setRowData(rowDataA);
  }, [rowDataA]);

const onRowDataB = useCallback(() => {
    setRowData(rowDataB);
}, [rowDataB]);
