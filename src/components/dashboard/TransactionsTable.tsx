import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const TransactionsTable = ({ transactions }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const currentTransactions = transactions.slice(start, end);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{backgroundColor: '#2C3E50', color: '#fff', textTransform: 'uppercase'}}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Transaction ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Amount</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Currency</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Stripe Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Stripe Token</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.transactionId}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.currency}</TableCell>
                <TableCell>{transaction.stripeEmail}</TableCell>
                <TableCell>{transaction.stripeToken}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TransactionsTable;

