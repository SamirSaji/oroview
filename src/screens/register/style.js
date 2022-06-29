import makeStyles from "@mui/styles/makeStyles";
export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    background: "#ebeff399",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  root: {
    padding: 0,
  },

  label: {
    marginTop: "12px",
    marginBottom: "6px",
    fontSize: "12px",
    color: "#848484",
    "& span": {
      color: "#ff4d4a",
    },
  },

  signupform: {
    padding: "24px 40px",
    backgroundColor: "white",
    borderRadius: "16px",
    border: "1px solid #e7e6e6",
    boxShadow: "0px 8px 69px #0000001A",
    maxWidth: 400,
    margin: "auto",
  },
  btn: {
    marginTop: 40,
    boxShadow: "none",
    borderRadius: "8px",
    background:
      "linear-gradient(90deg, rgba(222,87,229,1) 0%, rgba(187,99,251,1) 100%)",

    height: 44,

    textTransform: "uppercase",
    fontWeight: "normal",
  },
  title: {
    marginBottom: "16px",
    fontWeight: 700,
    textAlign: "center",
    fontSize: 24,
  },

  footerText: {
    color: "#848484 !important",
    fontSize: 12,
    textAlign: "center",
  },

  already: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: "todo_semibold",
  },

  error: {
    color: "red",
  },
  textbox: {
    [`& fieldset`]: {
      borderRadius: "10px",
      height: (props) => (props.multiline ? "unset" : 50),
      border: "1px solid #CED3DD",
      "& :hover": {
        border: "1px solid #5078E1",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "11px 14px",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: 14,
      fontWeight: 700,
    },
  },

  styledSelect: {
    borderRadius: "10px",
    "& .MuiOutlinedInput-input": {
      padding: "11px 14px !important",
    },
  },
}));
