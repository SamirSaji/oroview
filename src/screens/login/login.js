import React, { useEffect } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Container,
  Stack,
  Snackbar,
} from "@mui/material";
import { useStyles } from "./style";
import { Link, useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { AuthContext } from "../../App.auth";
import { config } from "../../config";
import CryptoJS from "crypto-js";

const InitialState = {
  username: "",
  password: "",

  error: {
    username: "",
    password: "",
  },
};
export const Login = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { userData, AuthUpdate } = React.useContext(AuthContext);

  const [showPassword, setShowPassword] = React.useState();
  const [login, setLogin] = React.useState({ ...InitialState });

  const [alert, setAlert] = React.useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      userData?.login && navigate("/posts");
    } else {
      navigate("/register");
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const updateState = (key, value) => {
    let error = login.error;
    error[key] = "";
    setLogin({ ...login, [key]: value, error });
  };

  const ValideToRegister = () => {
    let isValid = true;
    let error = login.error;
    //Checking username

    if (login.username.length < 4) {
      isValid = false;
      error.username = "Username should be greater than 4 letters";
    }
    if (login.username.length === 0) {
      isValid = false;
      error.username = "Username is Required";
    }

    //Check password
    if (login.password.length < 4) {
      isValid = false;
      error.password = "Password should be greater than 4 letters";
    }
    //Check password
    if (login.password.length === 0) {
      isValid = false;
      error.password = "Password is Required";
    }
    setLogin({ ...login, error });
    return isValid;
  };

  const OnLogin = () => {
    if (ValideToRegister()) {
      if (
        login?.username === userData?.username &&
        login?.password === userData?.password
      ) {
        let localData = userData;
        localData.login = true;
        let encryptKey = CryptoJS.AES.encrypt(
          JSON.stringify(localData),
          config.secret_key
        ).toString();
        localStorage.setItem("token", encryptKey);
        AuthUpdate(localData);
        navigate("/posts");
      } else {
        setAlert({
          open: true,
          message: "Wrong Credentials!",
          backgroundColor: "#FF3232",
        });
      }
    }
  };
  return (
    <div className={classes.rootContainer}>
      <Container maxWidth="xs" className={classes.root}>
        <div className={classes.signupform}>
          <Typography variant="h6" className={classes.title}>
            Sign In
          </Typography>

          <form>
            <InputLabel className={classes.label}>
              Username <span>*</span>
            </InputLabel>

            <TextField
              className={classes.textbox}
              fullWidth={true}
              variant="outlined"
              size="small"
              type="text"
              placeholder="Username"
              value={login.username}
              onChange={(e) => updateState("username", e.target.value)}
              color="secondary"
            />
            {login.error.username.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {login.error.username}
              </Typography>
            )}

            <Stack
              flexDirection="row"
              justifyContent="space-between"
              style={{ marginTop: 10 }}
            >
              <InputLabel className={classes.label}>
                Password <span>*</span>
              </InputLabel>
            </Stack>

            <TextField
              className={classes.textbox}
              fullWidth={true}
              size="small"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              variant="outlined"
              color="secondary"
              value={login.password}
              onChange={(e) => updateState("password", e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <RemoveRedEyeOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {login.error.password.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {login.error.password}
              </Typography>
            )}

            <br />
            <br />
            <Button
              variant="contained"
              fullWidth={true}
              className={classes.btn}
              onClick={OnLogin}
            >
              Sign In
            </Button>
            <br />
            <br />

            <Link to="/register" style={{ textDecoration: "none" }}>
              <Typography variant="body2" className={classes.footerText}>
                Register
              </Typography>
            </Link>
          </form>
        </div>
      </Container>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={3000}
      />
    </div>
  );
};
