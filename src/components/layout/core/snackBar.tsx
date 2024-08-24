import { Alert, Snackbar } from "@mui/material";

export interface SnackbarProps {
  open: boolean;
  handleClose: () => void;
  message?: string;
}

const SnackBar = (props: SnackbarProps) => {
  return (
    <Snackbar
      open={props.open}
      onClose={props.handleClose}
      autoHideDuration={5000}
    >
      <Alert
        onClose={props.handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100" }}
      >{props.message}</Alert>
    </Snackbar>
  );
};
export default SnackBar