import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


//-----> fields represent JSON keys. 
const columns = [
    {field:"id", headerName:"User id"},
    {field:"name", width:200, headerName:"Name"},
    {field:"username", width:150, headerName:"Username"},
    {field:"email", width:250, headerName:"Email"},
    {field:"website", width:200, headerName:"Personal Blog"},
]




export default function Datalist() {
  //---->setting initial state of users to empty array
    const [users,setUsers]=useState([])  
   //----> updating state of users to the data we get from an API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json))
        
      },[]);
  return (
    <div className="container">
      <div className="headline">
       <h1>Data From an API "https://jsonplaceholder.typicode.com/users"</h1> 
      </div>
    <Box justify="center" sx={{ height: 700, width: '100%' }}>
      <DataGrid
         sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
}