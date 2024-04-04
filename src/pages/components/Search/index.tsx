// import Autocomplete from '@mui/material/Autocomplete';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import { useRef, useState } from 'react';
// import { useDebounce } from 'hooks';

// const mockProductList = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

// const ListSearch = () => {
//   //   const [inputValue, setInputValue] = useState<string>('');
//   //   const debouncedValue = useDebounce<string>(inputValue, 500);
//   const data = mockProductList;
//   const htmlRef = useRef<HTMLDivElement>(null);

//   //   const handleFocus = () => {
//   //     if (htmlRef.current) {
//   //       htmlRef.current.focus();
//   //     }
//   //   };

//   //   const handleChangeInput = (
//   //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   //   ) => {
//   //     setInputValue(e.target.value);
//   //   };

//   return (
//     <>
//       <Box sx={{ display: 'flex' }}>
//         <Autocomplete
//           freeSolo
//           fullWidth
//           disableClearable
//           options={data}
//           renderInput={(params) => {
//             // setInputValue(String(params.inputProps.value));
//             return (
//               <TextField
//                 {...params}
//                 label="Tìm kiếm sản phẩm..."
//                 // onChange={handleChangeInput}
//                 InputProps={{
//                   ...params.InputProps,
//                   type: 'search',
//                   style: {
//                     marginRight: '8px'
//                     // flex: 1
//                     // height: '50px'
//                     // paddingTop: '10px',
//                     // paddingBottom: '10px'
//                   }
//                 }}
//                 inputRef={htmlRef}
//                 sx={{
//                   '& .MuiInputBase-input': {
//                     height: '15px'
//                     // paddingY: '5px'
//                     // padding: '10px'
//                   }
//                 }}
//               />
//             );
//           }}
//         />
//         <Button
//           //   onClick={handleFocus}
//           variant="text"
//           sx={{
//             height: '57px',
//             borderTopLeftRadius: 0,
//             borderBottomLeftRadius: 0
//           }}
//         >
//           <SearchIcon sx={{ width: '50' }} fontSize="large" />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default ListSearch;

import { InputBase, Paper, IconButton, Box, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const mockProductList = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

const ListSearch = () => {
  const data = mockProductList;
  return (
    <Box sx={{ display: 'flex' }}>
      {/* <Autocomplete>

        </Autocomplete> */}
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Tìm kiếm sản phẩm..."
          inputProps={{ 'aria-label': 'Tìm kiếm' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};
export default ListSearch;
