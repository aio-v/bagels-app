import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Typography, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import styles from './maintable.module.css';
import { CardLabel } from './card';

function descendingComparator(a, b, orderBy) {
    if(b[orderBy] < a[orderBy]){
      return -1;
    }
    if(b[orderBy] > a[orderBy]){
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  

function stableSort(array, comparator) {
const stabilizedThis = array.map((el, index) => [el, index]);
stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
    return order;
    }
    return a[1] - b[1];
});
return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'avatar',
        numeric: false,
        disablePadding: true,
        label: 'Avatar',
    },
    {
        id: 'ign',
        numeric: false,
        disablePadding: true,
        label: 'Username',
    },
    {
        id: 'class',
        numeric: false,
        disablePadding: true,
        label: 'Class',
    },
    {
        id: 'level',
        numeric: true,
        disablePadding: true,
        label: 'Level',
    },
    {
        id: 'culvert_streak',
        numeric: true,
        disablePadding: false,
        label: 'Culvert Streak',
    },
    {
        id: 'culvert',
        numeric: true,
        disablePadding: false,
        label: 'Culvert Score',
    },
    {
        id: 'flag_streak',
        numeric: true,
        disablePadding: false,
        label: 'Flag Streak',
    },
    {
        id: 'flag',
        numeric: true,
        disablePadding: false,
        label: 'Flag',
    },
];

function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property) => (event) => { onRequestSort(event, property); };

    return (
        <TableHead>
            <TableRow>
                {
                    headCells.map((headCell) => (
                        <TableCell
                        className={styles.header}
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        >
                            { headCell.id != "avatar" ? 
                                <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                    {orderBy === headCell.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel> : headCell.label
                            }
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    )
}

export default function MainTable({ data }) {
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('culvert');

    const handleRequestSort = (
        event,
        property,
      ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };

    return (
        <TableContainer className={styles.table_wrapper + " " + "card"}>
            <CardLabel text="RANKINGS" marginTop="32px" marginRight="0px" marginBottom="8px" marginLeft="48px" />
            <Table >
                <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                />  
                <TableBody>
                    {
                        stableSort(data, getComparator(order, orderBy))
                        .slice()
                        .map((rowContent, index) => {
                            return (
                                <TableRow
                                tabIndex={-1}
                                key={index}
                                >
                                    <TableCell className={styles.cell} align="center">
                                        <Link href={"/m/"+encodeURIComponent(rowContent.ign)}>
                                            <Image 
                                            src={rowContent.avatar ? rowContent.avatar : "https://i.imgur.com/SXtkcXd.png"} 
                                            width={96} 
                                            height={96} 
                                            alt="Booper"/>
                                        </Link>
                                    </TableCell>
                                    <TableCell className={styles.cell + " " + styles.left_align} align="center">
                                        <Link href={"/m/"+encodeURIComponent(rowContent.ign)} className={styles.link_hover}>{rowContent.ign}</Link>
                                    </TableCell>
                                    <TableCell className={styles.cell + " " + styles.left_align} align="center">{rowContent.class}</TableCell>
                                    <TableCell className={styles.cell + " " + styles.left_align} align="center">{rowContent.level}</TableCell>
                                    <TableCell className={styles.cell} align="center">{rowContent.culvert_streak}</TableCell>
                                    <TableCell className={styles.cell} align="center">{rowContent.culvert}</TableCell>
                                    <TableCell className={styles.cell} align="center">{rowContent.flag_streak}</TableCell>
                                    <TableCell className={styles.cell} align="center">{rowContent.flag}</TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}