import React from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Skeleton,
  Pagination,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./style";
import EyeIcon from "../../assets/eyeIcon";

export const TabelComponent = (props) => {
  const {
    state,
    loading,
    page,
    setPage,
    count,
    search,
    setLimitValue,
    bodyTitles,
    searchName,
    handleView,
  } = props;
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
    setLimitValue(5 * newPage);
  };

  // Listing Data
  const listrender = () => {
    let data = search
      ? state?.filter((val) => {
          if (
            val?.[searchName]?.toLowerCase().includes(search?.toLowerCase())
          ) {
            return val;
          }
          return false;
        })
      : state;
    if (data?.length === 0) {
      return (
        <StyledTableRow>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell>
            <Typography>{`No Data Found`}</Typography>
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
        </StyledTableRow>
      );
    } else {
      return data.map((val) => {
        return (
          <StyledTableRow key={val.id}>
            {bodyTitles?.map((title) => (
              <StyledTableCell
                component="th"
                scope="row"
                sx={{
                  textAlign: `left !important`,
                }}
              >
                {val?.[title] ?? "-"}
              </StyledTableCell>
            ))}

            <StyledTableCell
              component="th"
              scope="row"
              sx={{
                textAlign: `center !important`,
              }}
            >
              <Stack direction={`row`} justifyContent="center">
                <IconButton
                  variant="outlined"
                  onClick={() => handleView(val.id)}
                >
                  <EyeIcon sx={{ fontSize: "16px" }} />
                </IconButton>
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        );
      });
    }
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        boxShadow: "0px 12px 53px rgb(29 31 114 / 7%)",
        border: "1px solid #00000012",
      }}
    >
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table stickyHeader aria-label="sticky table" size="medium">
          <TableHead>
            <TableRow>
              {props?.titles.map((val) => {
                return (
                  <StyledTableCell
                    sx={{
                      textAlign: `${val.align} !important`,
                    }}
                  >
                    {val.title}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <>
                <StyledTableRow>
                  {props?.titles.map((val) => {
                    return (
                      <StyledTableCell component="th" scope="row">
                        <Skeleton variant="text" />
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              </>
            ) : (
              <>{listrender()}</>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div
        style={{
          padding: "10px 10px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Pagination
          count={Math.round(count / 5)}
          page={page + 1}
          color="primary"
          onChange={handleChangePage}
        />
      </div>
    </Paper>
  );
};
