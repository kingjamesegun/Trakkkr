import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Switch from '@material-ui/core/Switch';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, image, jumiaPrice, discount, priceSet, toggle) {
  return { name, image, jumiaPrice, discount, priceSet, toggle };
}


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
    const classes = useStyles();

    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
    });
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, state.checkedB),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">
                Jumia Current Price&nbsp;(NGN)
            </StyledTableCell>
            <StyledTableCell align="right">Discount&nbsp;(NGN)</StyledTableCell>
            <StyledTableCell align="right">Price Set&nbsp;(NGN)</StyledTableCell>
            <StyledTableCell align="right">Keep Trak&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" className="trakker__name">
                {row.name}
                <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/803057/1.jpg?8112" alt="image__product" className="trakker__img" width="30px"/>
                
              </StyledTableCell>
              <StyledTableCell align="right">{row.jumiaPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.discount}</StyledTableCell>
              <StyledTableCell align="right">{row.priceSet}</StyledTableCell>
              <StyledTableCell align="right">
                <Switch
                    checked={row.toggle}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
