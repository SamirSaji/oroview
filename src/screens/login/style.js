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
  logoContainer: {
    display: "flex",
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
  forgotPassword: {
    marginTop: "12px",
    marginBottom: "6px",
    textDecoration: "unset",
    "& .MuiTypography-root": {
      fontWeight: 500,
      fontSize: 12,
      color: theme.palette.primary.main,
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
    marginTop: "24px",
    marginBottom: "16px",
    fontWeight: 700,
    textAlign: "center",
    fontSize: 24,
  },
  subtitle: {
    marginBottom: "24px",
    color: "#848484",
    textAlign: "center",
    fontSize: 12,
  },
  footerText: {
    color: "#848484",
    fontSize: 12,
    textAlign: "center",
  },
  footerImageContainer: {
    display: "flex",
    marginTop: 16,
    marginBottom: 16,
    "& img": {
      margin: "auto",
    },
    cursor: "pointer",
  },
  already: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: "todo_semibold",
  },

  countrycode: {
    width: "95%",
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
}));
