import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
// Styles
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "10px 28px",
    [theme.breakpoints.down("md")]: {
      margin: "8px",
    },
  },
  create: {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  search: {
    backgroundColor: theme.palette.common.white,

    border: "0px !important",
    borderRadius: "12px !important",
    boxShadow: "0px 20px 25px #D9D9D97A",
  },
  noBorder: {
    border: "none",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 15,
    height: "fit-content",
    margin: "auto 0px",
    textAlign: "start",
  },
  dialogTitle: {
    fontFamily: "oro_medium",
  },
  dialogBody: {
    fontFamily: "oro_regular",
    fontSize: "14px",
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export { useStyles, StyledDialog };
