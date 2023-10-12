import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {MunroObjectMaker} from './MunroGenerate'


function createData(key, name, height_ft, height_m, latitude, longitude) {
  return {key, name, height_ft, height_m, latitude, longitude };
}

export default function BasicTable() {
  const [rows, setRows] = React.useState([])
  const [munros, setMunros] = React.useState([])

  React.useEffect(
    () => {
        const newRows = []
        const getRows = async() => {
        const munros = await MunroObjectMaker()
        setMunros(munros)
      }
     getRows()
  },[])

  React.useEffect(
    () => {
      const newRows = []
      for (const munro in munros) {
        const Key = munros[munro]["Key"]
        const Height_ft = munros[munro]["Height_ft"]
        const Height_m = munros[munro]["Height_m"]
        const Lat = munros[munro]["Lat"]
        const Long = munros[munro]["Long"]
          newRows.push(createData(Key, munro, Height_ft, Height_m, Lat, Long))
      }
      newRows.sort((a,b) => a.key < b.key)
      newRows.reverse()
      setRows(newRows)
  },[munros])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Number</TableCell>
            <TableCell align="left">Munros</TableCell>
            <TableCell align="right">Height (ft)</TableCell>
            <TableCell align="right">Height (m)</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row" >{row.key}</TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align="right">{row.height_ft}</TableCell>
              <TableCell align="right">{row.height_m}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

