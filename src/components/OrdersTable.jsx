import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useMediaQuery } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34 },
];

export default function OrdersTable() {
    const isNonLaptop = useMediaQuery('(min-width:770px)');
    const isNonMobile = useMediaQuery('(min-width:550px)');
    return (
        <Box
            sx={{
                height: '400px',
                width: isNonLaptop ? '65%' : isNonMobile ? '50%' : '100%',
                color: 'white',
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={(theme) => ({
                    color: 'white',

                    ['.MuiDataGrid-topContainer']: {
                        bgcolor: 'black !important',
                    },
                    ['.MuiDataGrid-root']: {
                        bgcolor: 'black !important',
                    },
                    ['.MuiDataGrid-container--top [role=row]']: {
                        bgcolor: 'black !important',
                    },
                    '& .super-app-theme--header': {
                        backgroundColor: 'black !important',
                    },
                })}
            />
        </Box>
    );
}
