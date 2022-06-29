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
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ValidateEmail } from "../../utils";
import CryptoJS from "crypto-js";
import { AuthContext } from "../../App.auth";
import { config } from "../../config";
const roleType = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

const InitialState = {
  username: "",
  password: "",
  name: "",
  email: "",
  role: "",
  error: {
    username: "",
    password: "",
    name: "",
    email: "",
    role: "",
  },
};
export const Register = (props) => {
  const classes = useStyles();
  const { AuthUpdate } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState();
  const [register, setregister] = React.useState({ ...InitialState });

  useEffect(() => {
    localStorage.clear();
  }, []);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const updateState = (key, value) => {
    let error = register.error;
    error[key] = "";
    setregister({ ...register, [key]: value, error });
  };

  const ValideToRegister = () => {
    let isValid = true;
    let error = register.error;
    //Checking username

    if (register.username.length < 4) {
      isValid = false;
      error.username = "Username should be greater than 4 letters";
    }
    if (register.username.length === 0) {
      isValid = false;
      error.username = "Username is Required";
    }

    //Check password
    if (register.password.length < 4) {
      isValid = false;
      error.password = "Password should be greater than 4 letters";
    }
    //Check password
    if (register.password.length === 0) {
      isValid = false;
      error.password = "Password is Required";
    }

    //Check Name
    if (register.name.length < 4) {
      isValid = false;
      error.name = "Name should be greater than 4 letters";
    }
    if (register.name.length === 0) {
      isValid = false;
      error.name = "Name is Required";
    }

    //   Checking Email
    if (register.email.length === 0) {
      isValid = false;
      error.email = "Email is Required";
    }
    if (ValidateEmail(register.email) === false) {
      isValid = false;
      error.email = "Please Enter Valid Email";
    }

    //   Checking role
    if (register.role.length === 0) {
      isValid = false;
      error.role = "Role is Required";
    }
    setregister({ ...register, error });
    return isValid;
  };

  const Onregister = () => {
    if (ValideToRegister()) {
      let data = {
        name: register?.name,
        username: register?.username,
        role: register?.role,
        password: register?.password,
        email: register?.email,
        login: false,
      };
      let encryptKey = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        config.secret_key
      ).toString();
      localStorage.setItem("token", encryptKey);
      AuthUpdate(data);
      navigate("/login");
    }
  };
  return (
    <div className={classes.rootContainer}>
      <Container maxWidth="xs" className={classes.root}>
        <div className={classes.signupform}>
          <Typography variant="h6" className={classes.title}>
            Register
          </Typography>

          <form>
            <InputLabel className={classes.label}>
              Name <span>*</span>
            </InputLabel>

            <TextField
              className={classes.textbox}
              fullWidth={true}
              variant="outlined"
              size="small"
              type="text"
              placeholder="Name"
              value={register.name}
              onChange={(e) => updateState("name", e.target.value)}
              color="secondary"
            />
            {register.error.name.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {register.error.name}
              </Typography>
            )}
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
              value={register.username}
              onChange={(e) => updateState("username", e.target.value)}
              color="secondary"
            />
            {register.error.username.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {register.error.username}
              </Typography>
            )}
            <InputLabel className={classes.label}>
              Email <span>*</span>
            </InputLabel>

            <TextField
              className={classes.textbox}
              fullWidth={true}
              variant="outlined"
              size="small"
              type="email"
              placeholder="Email"
              value={register.email}
              onChange={(e) => updateState("email", e.target.value)}
              color="secondary"
            />
            {register.error.email.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {register.error.email}
              </Typography>
            )}

            <InputLabel className={classes.label}>
              Role <span>*</span>
            </InputLabel>
            <Select
              sx={{ padding: "0px !important" }}
              value={register.role}
              required={true}
              placeholder="Role"
              label="Role"
              input={<OutlinedInput sx={{ padding: "0px !important" }} />}
              onChange={(e) => updateState("role", e.target.value)}
              fullWidth
              className={classes.styledSelect}
            >
              {roleType &&
                roleType?.map((x) => {
                  return (
                    <MenuItem key={x?.value} value={x?.value}>
                      {x?.label}
                    </MenuItem>
                  );
                })}
            </Select>
            {register.error.role.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {register.error.role}
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
              value={register.password}
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
            {register.error.password.length > 0 && (
              <Typography variant={"caption"} color={"error"}>
                {register.error.password}
              </Typography>
            )}

            <br />
            <br />
            <Button
              variant="contained"
              fullWidth={true}
              className={classes.btn}
              onClick={Onregister}
            >
              Sign In
            </Button>
            <br />
            <br />
          </form>
        </div>
      </Container>
    </div>
  );
};
