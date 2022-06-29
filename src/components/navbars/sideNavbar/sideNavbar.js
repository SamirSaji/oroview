import React from "react";

import { Paper, Box, List, Typography, ListItem } from "@mui/material";
import { useStyles } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";
import { sideMenuRoutesOptions } from "../../../utils";
import { AuthContext } from "../../../App.auth";

export const SideNavBar = (props) => {
  const classes = useStyles(props);
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = React.useContext(AuthContext);
  const onLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.drawer} square>
        <div className={classes.drawerContainer}>
          <div className={classes.titles}>
            <img
              src="https://oropocket.com/Home_files/a1108c32-2f9f-426c-a7c9-650e727ece39_D11668A5-D1BF-4239-B0E6-28BA76BCD9F6_2_png.png"
              alt="logo"
              width="auto"
              height="30px"
            />
            <Typography className={classes.titleText}>
              &nbsp;&nbsp;OroPocket
            </Typography>
          </div>

          <br />

          <div className={classes.listView}>
            <List style={{ padding: 0 }}>
              {sideMenuRoutesOptions?.[userData?.role ?? "user"].map(
                (navBar, index) =>
                  navBar?.showMenu && (
                    <>
                      <ListItem
                        className={classes.menulist}
                        onClick={() => {
                          navigate(navBar?.route ?? "/");
                        }}
                        style={{ cursor: "pointer" }}
                        button
                        key={navBar.index}
                        selected={location.pathname === navBar?.route}
                      >
                        <Box style={{ display: "flex" }}>
                          {/* icons */}
                          &nbsp;&nbsp; <ListItemText primary={navBar?.icon} />
                          {/* title */}
                          <ListItemText primary={navBar.name} />
                        </Box>
                        {/* end */}
                      </ListItem>
                    </>
                  )
              )}
            </List>
          </div>
        </div>

        <div className={classes.logout}>
          <Typography className={"log"} onClick={onLogOut}>
            <Logout style={{ opacity: 0.7 }} />
            &nbsp; Logout{" "}
            <Typography
              className={classes.version}
              variant="caption"
              color="textSecondary"
            ></Typography>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
