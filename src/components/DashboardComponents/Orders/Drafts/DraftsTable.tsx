import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { StateContext } from "../../../../state/appstate";
import TableBody from "@mui/material/TableBody";
import Chip from "@mui/material/Chip";

export default function DraftsTable() {
  const { orders } = useContext(StateContext);
  console.log(orders);
  return (
    <div>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Draft Order</TableCell>

            <TableCell>Customer</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map(({ no, customer }: any, i) => {
            return (
              <TableRow>
                <TableCell>{no || "-"}</TableCell>
                <TableCell>{customer?.firstName || "-"}</TableCell>
                <TableCell>
                  <Chip size="small" label="Open" />
                </TableCell>
                <TableCell>Ksh. 0.0</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </TableContainer>
    </div>
  );
}
