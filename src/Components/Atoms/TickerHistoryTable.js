import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import './TickerHistoryTable.css'
import SkeltonItem from './SkeltonItem'

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
}

const headCells = [
    { id: 'symbol', numeric: false, disablePadding: true, label: 'Symbol' },
    { id: 'open', numeric: true, disablePadding: true, label: 'Open' },
    {
        id: 'Ltp',
        numeric: true,
        disablePadding: true,
        label: 'Price/Last trade ',
    },
    { id: 'high', numeric: true, disablePadding: false, label: 'High' },
    { id: 'low', numeric: true, disablePadding: false, label: 'Low' },
    { id: 'Pl', numeric: true, disablePadding: false, label: 'Pre Close' },
    { id: 'ptsC', numeric: true, disablePadding: false, label: 'Change' },
    { id: 'per', numeric: true, disablePadding: false, label: '% Change' },
]

function EnhancedTableHead(props) {
    const {
        classes,
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc'
                                        ? 'sorted descending'
                                        : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 350,
    },
    container: {
        maxHeight: 350,
        overflowY: 'scroll',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}))

export default function EnhancedTable({ rows, emptyRow }) {
    const classes = useStyles()
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('last')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [dense, setDense] = React.useState(false)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }
    console.log('ini t data', rows, emptyRow)

    return (
        <div className="ticker_History_table">
            <TableContainer className={classes.container}>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size="small"
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {rows.length > 0 && emptyRow ? (
                            stableSort(rows, getComparator(order, orderBy)).map(
                                (row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={`Row${index}_${row[1]}`}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row['symbol']}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row['open']}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row['ltP']}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row['high']}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row['low']}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row['previousClose']}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                className={
                                                    Math.sign(row['ptsC']) ===
                                                    -1
                                                        ? 'redColor'
                                                        : 'greenColor'
                                                }
                                            >
                                                {row['ptsC']}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                className={
                                                    Math.sign(row['per']) === -1
                                                        ? 'redColor'
                                                        : 'greenColor'
                                                }
                                            >
                                                {row['per']}
                                            </TableCell>

                                            {/* <TableCell align="right" className={Math.sign(row[5])===-1?"greenColor":"redColor"}>{row[5]}</TableCell> */}
                                        </TableRow>
                                    )
                                }
                            )
                        ) : (
                            <TableRow style={{ height: '33%' }}>
                                {!emptyRow ? (
                                    <>
                                        <TableCell colSpan={2}>
                                            <SkeltonItem />
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <SkeltonItem />
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <SkeltonItem />
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <SkeltonItem />
                                        </TableCell>
                                    </>
                                ) : (
                                    <TableCell colSpan={8}>
                                        <p className="title">No Data Match</p>
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                        {/* {!emptyRow && rows.length === 0 && (
                            <TableRow style={{ height: '33%' }}>
                              
                            </TableRow>
                        )} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
