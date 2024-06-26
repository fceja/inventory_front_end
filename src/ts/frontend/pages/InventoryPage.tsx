import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import "@scss/pages/InventoryPage.scss"

/**
 * Note - columns with type 'number' applies flex direction:row-reverse,
 * we apply custom styling to match type 'string', which applies flex direction:row
 */
const customHeaderStyles = 'custom-header-styles'
const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    type: 'number',
    headerClassName: customHeaderStyles
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    type: 'string',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    type: 'string',
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 110,
    type: 'number',
    headerClassName: customHeaderStyles
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    type: 'string',
    valueGetter: (_value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
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
        pageSizeOptions={[5, 10, 20, 50, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}