import React, { useImperativeHandle, forwardRef } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SimpleSnackbar =  forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");


  useImperativeHandle(ref, () => ({

     openToaster (msg) {
        setOpen(true);
        setMsg(msg);
      }
  }));
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
    setMsg("");
    
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
        action={
          <React.Fragment>
  
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
});
export default SimpleSnackbar;
