import { InputBase, Paper, IconButton, Box, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDebounce } from 'hooks';

const mockProductList = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

const ListSearch = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(inputValue, 500);
  // const htmlRef = useRef<HTMLDivElement>(null);
  // const handleFocus = () => {
  //   if (htmlRef.current) {
  //     htmlRef.current.focus();
  //   }
  // };

  // const handleChangeInput = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setInputValue(e.target.value);
  // };
  const handleChangeInput = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setInputValue(newValue);
  };

  return (
    <Box>
      <Autocomplete
        freeSolo
        fullWidth
        disableClearable
        options={mockProductList}
        inputValue={debouncedValue}
        onInputChange={handleChangeInput}
        renderInput={(params) => (
          <Paper
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              maxWidth: '600px'
            }}
            elevation={1}
          >
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Tìm kiếm sản phẩm..."
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        )}
      />
    </Box>
  );
};
export default ListSearch;
