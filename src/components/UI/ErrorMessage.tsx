import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState, type ReactElement } from 'react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
  type NavigateFunction,
} from 'react-router';

export const ErrorMessage = (): ReactElement => {
  const error = useRouteError();
  const navigate = useNavigate() as NavigateFunction;
  const [open, setOpen] = useState<boolean>(true);

  let message = 'Unknown error';
  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  }

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Something went wrong</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
