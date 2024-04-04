// import { LoadingButton, LoadingButtonProps } from '@mui/lab';
// import {
//   Box,
//   Button,
//   ButtonProps,
//   CircularProgress,
//   Popover,
//   PopoverProps,
//   Stack
// } from '@mui/material';
// import React, { FC, MouseEvent, ReactNode, useState } from 'react';

// interface PopoverConfirmProps {
//   open?: boolean;
//   anchorEl?: PopoverProps['anchorEl'];
//   title: ReactNode | (() => ReactNode);
//   popoverProps?: Omit<PopoverProps, 'open' | 'anchorEl'>;
//   okText?: string;
//   okVariant?: ButtonProps['variant'];
//   okButtonProps?: LoadingButtonProps;
//   cancelText?: string;
//   cancelButtonProps?: ButtonProps;
//   showCancel?: boolean;
//   children: any;
//   onOk?: (e?: MouseEvent<HTMLButtonElement>) => void;
//   onCancel?: (e?: MouseEvent<HTMLButtonElement>) => void;
// }

// const PopoverConfirm: FC<PopoverConfirmProps> = ({
//   open,
//   title,
//   popoverProps,
//   okText = 'Đồng ý',
//   okVariant = 'contained',
//   okButtonProps,
//   cancelText = 'Hủy',
//   cancelButtonProps,
//   showCancel = true,
//   onOk,
//   onCancel,
//   children,
//   ...props
// }) => {
//   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

//   const handleClick = (e: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(e.currentTarget);
//   };

//   const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
//     onCancel?.(e);
//     setAnchorEl(null);
//   };

//   const isOpen = open ?? Boolean(anchorEl);

//   const childrenWithProps = React.Children.map(children, (child) => {
//     if (React.isValidElement(child)) {
//       return React.cloneElement(child as any, {
//         onClick: (e: any) => {
//           handleClick(e);
//           child.props?.onClick?.(e);
//         }
//       });
//     }
//     return child;
//   });

//   return (
//     // <React.Fragment>
//     <>
//       {childrenWithProps}
//       <Popover
//         open={isOpen}
//         anchorEl={props?.anchorEl ?? anchorEl}
//         onClose={handleClose}
//         PaperProps={{ sx: { mt: 1 } }}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//         {...popoverProps}
//       >
//         <Stack spacing={1} sx={{ p: '0.5rem 1rem' }}>
//           <Box>{title}</Box>
//           <Stack
//             direction="row"
//             alignItems="center"
//             justifyContent="flex-end"
//             gap={1}
//           >
//             {showCancel && (
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 onClick={handleClose}
//                 sx={{ height: '28px' }}
//                 {...cancelButtonProps}
//               >
//                 {cancelText}
//               </Button>
//             )}
//             <LoadingButton
//               variant={okVariant}
//               color="secondary"
//               onClick={(e: any) => {
//                 onOk?.(e);
//               }}
//               loadingIndicator={
//                 <CircularProgress
//                   sx={{ color: '#fff' }}
//                   size="1rem"
//                   disableShrink
//                 />
//               }
//               sx={{ height: '28px' }}
//               {...okButtonProps}
//             >
//               {okText}
//             </LoadingButton>
//           </Stack>
//         </Stack>
//       </Popover>
//     </>
//     // </React.Fragment>
//   );
// };

// export default PopoverConfirm;
