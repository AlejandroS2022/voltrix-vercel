import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

function createData(ref, date, type, amount, status) {
  return { ref, date, type, amount, status };
}
const allRows = [
  createData(456789356, 'Sep 9, 2024, 04:30pm','Income', '+$5,670.00', 'Pending'),
  createData(456789356, 'Sep 9, 2024, 04:30pm','Savings', '+$5,670.00', 'Completed'),
  createData(456789356, 'Sep 9, 2024, 04:30pm','Expenses', '+$5,670.00', 'Cancelled'),
  createData(456789356, 'Sep 9, 2024, 04:30pm','Income', '+$5,670.00', 'Pending'),
  createData(456789356, 'Sep 9, 2024, 04:30pm','Savings', '+$5,670.00', 'Completed')
];
export default function TableHistory({ type }) {
  
  let filteredRows = allRows;
  if (type !== 'all') {
    const normalizedType = type.toLowerCase();
    
    filteredRows = allRows.filter(row => 
      row.type.toLowerCase() === normalizedType
    );
  }

  return (
    <TableContainer component={Paper} className='table-content'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ref ID</TableCell>
            <TableCell align="center">Transaction Date</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.ref}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center"><Chip className={row.status} label={row.status} /></TableCell>
            </TableRow>
          ))}
          {filteredRows.length === 0 && (
             <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                    No hay transacciones de tipo {type}.
                </TableCell>
             </TableRow>
          )}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}