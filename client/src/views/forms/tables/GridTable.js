import React from 'react';

// material-ui
import { Box } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useTheme } from '@emotion/react';

// table columns
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`
    },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90
    }
];

// table data
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lancaster', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lancaster', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

// ===========================|| TABLE - BASIC DATA GRID ||=========================== //

export default function TableDataGrid() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                height: 400,
                width: '100%',
                '& .MuiDataGrid-root': {
                    border: 'none',
                    '& .MuiDataGrid-cell': {
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.text.primary + 15 : theme.palette.grey[200]
                    },
                    '& .MuiDataGrid-columnsContainer': {
                        color: theme.palette.mode === 'dark' ? theme.palette.grey[600] : 'grey.900',
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.text.primary + 15 : theme.palette.grey[200]
                    },
                    '& .MuiDataGrid-columnSeparator': {
                        color: theme.palette.mode === 'dark' ? theme.palette.text.primary + 15 : theme.palette.grey[200]
                    }
                }
            }}
        >
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </Box>
    );
}
