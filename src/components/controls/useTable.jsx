import React, { useState } from 'react'
import { Table, makeStyles, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}))
export const useTable = (records, headCells ,filterFn) => {
  const classes = useStyles();
  const pages = [5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState()
  const TblContainer = (props) => (
    <Table className={classes.table}>
      {props.children}
    </Table>
  )
  const Tbhead = (props) => {

    const handleSortRequest = cellId => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(cellId)
    }

    return (<TableHead>
      <TableRow>
        {
          headCells.map(headCell => (
            <TableCell key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}>
              {headCell.disableSorting ? headCell.label :
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={() => { handleSortRequest(headCell.id) }}>
                  {headCell.label}
                </TableSortLabel>
              }
            </TableCell>))
        }
      </TableRow>
    </TableHead>)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const TbPagination = () =>
    (
      <TablePagination
        component='div'
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={pages}
        count={records.length}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowPerPage}
      >

      </TablePagination>
    )
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const recordAfterPagingAndSorting = () => {
    return stableSort(filterFn.fn(records), getComparator(order, orderBy))
    .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
  }

  return {
    TblContainer,
    Tbhead,
    TbPagination,
    recordAfterPagingAndSorting,
  }
}