import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { TopNavBar, SideNavBar } from "../components";
import Grid from "@mui/material/Grid";
import { Hidden } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    background: "#eaedf88a",
  },
  content: {
    height: "90vh",
    overflow: "auto",
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
  topNavbar: {
    position: "relative",
  },
  sideNavbar: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  positionrelative: {
    position: "relative",
    boxShadow: "3px 3px 6px #00000029",
  },
}));

const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });
  return (
    <div className={classes.root}>
      <Grid container>
        <Hidden mdDown>
          <Grid item xs={12} md={3} lg={2}>
            <SideNavBar />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9} lg={10}>
          <TopNavBar />
          <div className={classes.content}>
            <Component {...props}>{props.children}</Component>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withNavBars;
