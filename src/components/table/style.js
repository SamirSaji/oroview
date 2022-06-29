import { styled, TableRow, TableCell, tableCellClasses } from "@mui/material";
export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: "none",
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
    fontSize: 13,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "none",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: theme.palette.common.black,
    paddingLeft: 25,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    paddingLeft: 25,
    color: "#848484",
    opacity: "100%",
  },
}));
