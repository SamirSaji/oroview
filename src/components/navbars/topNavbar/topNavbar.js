import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Typography } from "@mui/material";
import { SideNavBar } from "..";
import { Person } from "@mui/icons-material";
import { AuthContext } from "../../../App.auth";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background:
      "transparent linear-gradient(90deg, #DE57E5 0%, #8863FB 100%) 0% 0% no-repeat padding-box",
  },
  title: {
    display: "block",
    marginTop: "7px",
  },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const TopNavBar = (props) => {
  const classes = useStyles();
  const { userData } = React.useContext(AuthContext);
  const [state, setState] = React.useState({
    openSideNavBar: false,
  });

  const toogleSideNavBar = () => {
    setState({
      ...state,
      openSideNavBar: !state.openSideNavBar,
    });
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            onClick={toogleSideNavBar}
            size="large"
          >
            <MenuIcon htmlColor="white" />
          </IconButton>

          <div className={classes.grow} />
          <Person style={{ fontSize: 22 }} />
          <Typography variant="subtitle2" sx={{ paddingLeft: 1, fontSize: 16 }}>
            {userData?.name ?? ""}
          </Typography>

          <Drawer
            open={state.openSideNavBar}
            variant={"temporary"}
            anchor="left"
            onClose={toogleSideNavBar}
          >
            <div style={{ width: 240 }}>
              <SideNavBar isMobile={true} />
            </div>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};
