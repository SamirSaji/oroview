import React, { useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Grid,
  Typography,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { useStyles, StyledDialog } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { TabelComponent } from "../../components";
import SearchIcon from "@mui/icons-material/Search";
import { NetworkCall } from "../../networkcall";
import { config } from "../../config";

// Constant Data
const Titles = [
  { title: "Id", align: "left" },
  { title: "User Id", align: "left" },
  { title: "Title", align: "left" },
  { title: "Body", align: "left" },
  { title: "Actions", align: "center" },
];

const bodyTitles = ["id", "userId", "title", "body"];

export const Posts = (props) => {
  const classes = useStyles();

  // const debounce = UseDebounce();
  // States
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const [limit, setLimit] = React.useState(5);
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [postDialog, setPostDialog] = React.useState({
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
      `${config.api_url}posts`,
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

  const handlePostView = async (id) => {
    await NetworkCall(
      `${config.api_url}posts/${id}`,
      "GET",
      {},
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        if (res.status === 200) {
          setPostDialog({
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
    setPostDialog({
      open: false,
      data: {},
    });
  };

  return (
    <div className={classes.root}>
      <div style={{ marginBottom: "25px", marginTop: "25px" }}>
        <Grid container flexDirection="row" alignItems={"center"}>
          <Grid item xs={12} lg={6}>
            <Typography className={classes.title}>Posts </Typography>
          </Grid>
          <Grid item xs={12} lg={6} style={{ textAlign: "end" }}>
            <TextField
              size="small"
              type="search"
              onChange={(e) => handleSearch(e.target.value)}
              value={search}
              placeholder="Search by Title"
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
        searchName={"title"}
        handleView={handlePostView}
      />

      <StyledDialog
        onClose={handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={postDialog?.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Post Details
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
                {postDialog?.data?.id ?? ""}{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={classes.dialogTitle}>User Id </Typography>
              <Typography className={classes.dialogBody}>
                {postDialog?.data?.userId ?? ""}{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.dialogTitle}>Title </Typography>
              <Typography className={classes.dialogBody}>
                {postDialog?.data?.title ?? ""}{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.dialogTitle}>Body </Typography>
              <Typography className={classes.dialogBody}>
                {postDialog?.data?.body ?? ""}{" "}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </StyledDialog>
    </div>
  );
};
