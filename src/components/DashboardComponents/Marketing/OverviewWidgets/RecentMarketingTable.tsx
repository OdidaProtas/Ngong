import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StatusChip from "../../Products/ProductLists/StatusChip";
import TableMenu from "./TableMenu";
import Grid from "@mui/material/Grid";

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [createRow("Abandoned checkout emails by Tokea", 100, 1.15)];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function RecentMarketingTable() {
  return (
    <Grid item xs={12} >
      <TableContainer
        component={Paper}
      >
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Cost
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Sales
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Session
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell sx={{ fontWeight: "bold" }}>
                  {row.desc}
                  <Box sx={{ my: 1 }}>Created at: 4:20</Box>
                  <Box>
                    <Typography
                      sx={{ color: "text.secondary" }}
                      variant="caption"
                    >
                      This feature is turned on by default
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <StatusChip status="Active" />
                </TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">
                  <TableMenu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
