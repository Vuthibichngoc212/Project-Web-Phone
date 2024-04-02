import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'STT', width: 100 },
  { field: 'name', headerName: 'Họ tên', width: 250 },
  { field: 'email', headerName: 'Email', sortable: false, width: 250 },
  { field: 'account', headerName: 'Tài khoản', sortable: false, width: 220 },
  {
    field: 'password',
    headerName: 'Mật khẩu',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180
  },
  { field: 'actions', headerName: 'Thao tác', sortable: false, width: 130 }
];

const rows = [
  {
    id: 1,
    email: 'test01@gmail.com',
    name: 'Jon',
    account: 'Jon',
    password: 111
  },
  {
    id: 2,
    email: 'test02@gmail.com',
    name: 'Cersei',
    account: 'Cersei',
    password: 111
  },
  {
    id: 3,
    email: 'test03@gmail.com',
    name: 'Jaime',
    account: 'Jaime',
    password: 111
  },
  {
    id: 4,
    email: 'test04@gmail.com',
    name: 'Arya',
    account: 'Arya',
    password: 111
  },
  {
    id: 5,
    email: 'test05@gmail.com',
    name: 'Daenerys',
    account: null,
    password: 111
  },
  {
    id: 6,
    email: 'test06@gmail.com',
    name: null,
    account: 'Aenerys',
    password: 111
  },
  {
    id: 7,
    email: 'test07@gmail.com',
    name: 'Ferrara',
    account: 'Ferrara',
    password: 111
  },
  {
    id: 8,
    email: 'test08@gmail.com',
    name: 'Rossini',
    account: 'Rossini',
    password: 111
  },
  {
    id: 9,
    email: 'test09@gmail.com',
    name: 'Harvey',
    account: 'Harvey',
    password: 111
  }
];

const UserTable = () => {
  return (
    <div style={{ height: 580, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserTable;

// import React from 'react';

// const index = () => {
//   return <div>index</div>;
// };

// export default index;
