import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: "0px 20px 20px 0px",
    zIndex: 10000,
  },
  drawer: {
    width: "100%",
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    boxShadow: "0px 5px 20px #0000000A",
    border: "1px solid #dcdcdc63",
  },
  drawerContainer: {
    overflow: "hidden",
  },
  title: {
    fontWeight: 600,
    margin: "20px 10px 0px",
    paddingBottom: "14px",
    borderBottom: "1px solid #00000012",
  },
  listView: {
   
    // overflow: "hidden",
    "& .MuiTypography-root": {
      marginRight: "10px",
    },
    "& .MuiListItem-root": {
      display: "-webkit-box",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      padding: 4,
      width: "99%",

      marginTop: 10,
      "&:hover": {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        padding: 4,
        width: "99%",
      },
    },
    "& .MuiSvgIcon-root": {
      display: "flex",
    },
    "& .MuiListItem-root.Mui-selected": {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderTopLeftRadius: 6,
      borderBottomLeftRadius: 6,
      color: "#8863FB",
      fontWeight: 600,

      "& .MuiTypography-root": {
        fontWeight: 500,
        fontSize: "16px",
      },
    },
  },
  listViewDataChild: {
    background: theme.palette.primary.light,
    borderRadius: "6px 8px 8px 6px",
    padding: 10,
    fontSize: 13,
    color: "#8863FB",
    cursor: "pointer",
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    margin: "18px 40px",
    fontWeight: 500,
  },
  listViewChild: {
    fontSize: 14,
    color: "#313147",
    cursor: "pointer",
    margin: "18px 40px",
    fontWeight: 500,
  },
  listViewChildParent: {
    borderLeft: "1.5px solid #00000029",
    marginLeft: "24px",
  },
  titles: {
    marginTop: 12,
    marginLeft: 12,
    display: "flex",
    // justifyContent: "center",
  },
  logout: {
    borderTop: "1px solid #00000012",
    position: "absolute",
    paddingTop: 16,
    bottom: 0,
    width: "100%",
    padding: "6px 16px",
    height: "56px",
    "& .log": {
      display: "flex",
      alignItems: "center",
    },
  },
  version: {
    position: "absolute",
    width: "80%",
    textAlign: "right",
  },
  titleText: {
    fontSize: "24px",
    fontFamily: "oro_medium",
  },
}));
