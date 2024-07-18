import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import { Controller, useForm } from 'react-hook-form';
import { IProduct } from 'interfaces/products';
import { useAddProductsMutation } from 'redux/api/api.caller';

export interface Props {
  open: boolean;
  onClose: () => void;
  mode: 'add' | 'edit';
  product: IProduct | null;
}

const ProductsDialog = ({ open, onClose, mode }: Props) => {
  const [addProducts] = useAddProductsMutation();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<IProduct>({
    defaultValues: {
      code: '',
      name: '',
      price: ''
    }
  });
  const title = mode === 'add' ? 'Thêm sản phẩm' : 'Chỉnh sửa sản phẩm';

  const formatPrice = (value: any) => {
    const cleanedValue = value.replace(/[^\d]/g, '');
    return cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const onSubmit = async (productsData: IProduct) => {
    await addProducts(productsData).then((data: any) => {
      if (data?.data) {
        toast.success('Thêm sản phẩm thành công', {
          position: 'bottom-right',
          autoClose: 1000,
          theme: 'colored'
        });
        reset();
        onClose();
      } else {
        toast.error('Thêm sản phẩm thất bại', {
          theme: 'colored',
          autoClose: 1000,
          position: 'bottom-right'
        });
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              placeholder="Mã sản phẩm"
              margin="dense"
              type="text"
              fullWidth
              variant="outlined"
              {...register('code', { required: 'Mã sản phẩm là bắt buộc' })}
              error={!!errors.code}
              helperText={errors.code?.message}
            />
            <TextField
              placeholder="Tên sản phẩm"
              margin="dense"
              type="text"
              fullWidth
              variant="outlined"
              {...register('name', { required: 'Tên sản phẩm là bắt buộc' })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            {/* <TextField
              placeholder="Giá"
              margin="dense"
              fullWidth
              variant="outlined"
              {...register('price', { required: 'Giá là bắt buộc' })}
              error={!!errors.price}
              helperText={errors.price?.message}
            /> */}
            <Controller
              name="price"
              control={control}
              rules={{ required: 'Giá là bắt buộc' }}
              render={({ field }: any) => (
                <TextField
                  {...field}
                  onChange={(e) => field.onChange(formatPrice(e.target.value))}
                  placeholder="Giá"
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  error={!!errors.price}
                  helperText={errors.price?.message}
                />
              )}
            />
            <DialogActions>
              <Button onClick={onClose}>Đóng</Button>
              <Button type="submit" variant="contained" color="primary">
                Đồng ý
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductsDialog;
