import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function Details() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        `${process.env.REACT_APP_REQ_URL}/user/get-details`
      );
      setData(response.data.data);
      console.log(response);

      console.log(data);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <TableContainer component={Paper} className="container mt-5">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Id</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Name</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Age</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Education</strong>
            </TableCell>
            <TableCell align="right">
              <strong>JobProfile</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Experience</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Location</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Companies</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Technologies</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((data) => (
            <TableRow
              key={data.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="data">
                {data.id}
              </TableCell>
              <TableCell align="right">{data.name}</TableCell>
              <TableCell align="right">{data.age}</TableCell>
              <TableCell align="right">{data.education}</TableCell>
              <TableCell align="right">{data.jobProfile}</TableCell>
              <TableCell align="right">{data.Experience}</TableCell>
              <TableCell align="right">{data.location}</TableCell>
              <TableCell align="right">{data.companies}</TableCell>
              <TableCell align="right">{data.technologies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
