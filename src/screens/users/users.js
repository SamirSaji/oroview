import React, { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Grid,
  Typography,
  DialogTitle,
  IconButton,
  DialogContent,
} from "@mui/material";
import { useStyles, StyledDialog } from "../posts/style";
import CloseIcon from "@mui/icons-material/Close";
import { TabelComponent } from "../../components";
import SearchIcon from "@mui/icons-material/Search";
import { NetworkCall } from "../../networkcall";
import { config } from "../../config";

// Constant Data
const Titles = [
  { title: "Id", align: "left" },
  { title: "Name", align: "left" },
  { title: "Username", align: "left" },
  { title: "Email", align: "left" },
  { title: "Website", align: "left" },
  { title: "Actions", align: "center" },
];

const bodyTitles = ["id", "name", "username", "email", "website"];

export const Users = (props) => {
  const classes = useStyles();

  // const debounce = UseDebounce();
  // States
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userDialog, setUserDialog] = useState({
    open: false,
    data: {},
  });
  //   SideEffects
  useEffect(() => {
    GetAllData();
  }, []);

  // Handle Functions

  //   Fetch Functions
  // Get All Listing Data
  const GetAllData = async (limit, offset) => {
    await NetworkCall(
      `${config.api_url}users`,
      "GET",
      {},
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setData(res?.data ?? []);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const handleSearch = (data) => {
    setSearch(data);
  };

  const handleUserView = async (id) => {
    await NetworkCall(
      `${config.api_url}users/${id}`,
      "GET",
      {},
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setUserDialog({
            open: true,
            data: res?.data,
          });
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleCloseDialog = () => {
    setUserDialog({
      open: false,
      data: {},
    });
  };
  return (
    <div className={classes.root}>
      <div style={{ marginBottom: "25px", marginTop: "25px" }}>
        <Grid container flexDirection="row" alignItems={"center"}>
          <Grid item xs={12} lg={6}>
            <Typography className={classes.title}>Users </Typography>
          </Grid>
          <Grid item xs={12} lg={6} style={{ textAlign: "end" }}>
            <TextField
              size="small"
              type="search"
              onChange={(e) => handleSearch(e.target.value)}
              value={search}
              placeholder="Search by Name"
              className={classes.search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                classes: { notchedOutline: classes.noBorder },
              }}
            />
          </Grid>
        </Grid>
      </div>

      <TabelComponent
        state={data.slice(offset * 5, limit) ?? []}
        loading={loading}
        titles={Titles}
        setLimitValue={setLimit}
        setPage={setOffset}
        page={offset}
        count={data?.length ?? 0}
        search={search}
        bodyTitles={bodyTitles}
        searchName={"name"}
        handleView={handleUserView}
      />

      <StyledDialog
        onClose={handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={userDialog?.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          User Details
          {handleCloseDialog ? (
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container xs={12} spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>Id </Typography>
              <Typography className={classes.dialogBody}>
                {userDialog?.data?.id ?? ""}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>Name</Typography>
              <Typography className={classes.dialogBody}>
                {userDialog?.data?.name ?? ""}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>Username </Typography>
              <Typography className={classes.dialogBody}>
                {userDialog?.data?.username ?? ""}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>Email</Typography>
              <Typography className={classes.dialogBody}>
                {userDialog?.data?.email ?? ""}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>Website </Typography>
              <Typography className={classes.dialogBody}>
                {userDialog?.data?.website ?? ""}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>Address </Typography>
              <Typography className={classes.dialogBody}>
                {`${userDialog?.data?.address?.street ?? ""}, ${
                  userDialog?.data?.address?.suite ?? ""
                }, ${userDialog?.data?.address?.city ?? ""} , ${
                  userDialog?.data?.address?.zipcode ?? ""
                }` ?? ""}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </StyledDialog>
    </div>
  );
};
