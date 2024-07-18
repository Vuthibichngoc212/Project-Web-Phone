import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ReusableTable from 'components/TableControl';
import React, { useState } from 'react';
import { useGetListProductsQuery } from 'redux/api/api.caller';
import EditIcon from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { IProduct } from 'interfaces/products';
import ProductsDialog from './ProductsDialog/ProductsDialog';

const AdProductsPage = () => {
  const { data: products } = useGetListProductsQuery();
  const [openDialog, setOpenDialog] = useState(false);

  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const handleAddProduct = () => {
    setMode('add');
    setSelectedProduct(null);
    setOpenDialog(true);
  };

  const handleEditProduct = (product: IProduct) => {
    setMode('edit');
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  return (
    <>
      <ReusableTable
        columns={[
          'STT',
          'Mã sản phẩm',
          'Tên sản phẩm',
          'Giá',
          'Khuyến mãi',
          'Thao tác'
        ]}
        onClickAddProduct={handleAddProduct}
        columnWidths={['20px', '70px', '200px', '100px', '50px', '100px']}
      >
        {products &&
          products.length > 0 &&
          products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.code}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.promotion}</TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <IconButton onClick={() => handleEditProduct(product)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
      </ReusableTable>
      <ProductsDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        mode={mode}
        product={selectedProduct}
      />
    </>
  );
};

export default AdProductsPage;
