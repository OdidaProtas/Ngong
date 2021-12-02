import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Search from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Form, Formik, validateYupSchema } from "formik";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import useModalControls from "../../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../../SharedComponents";
import ProductSelect from "./ProductSelect";
import SelectCustomer from "./SelectCustomer";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Popover from "@mui/material/Popover";
import DiscountForm from "./DiscountForm";
import ShippingForm from "./ShippingForm";
import axiosInstance from "../../../../state/data/axiosInstance";
import { StateContext } from "../../../../state/appstate";

const CustomItem = ({ toggle }) => {
  const checked = true;
  return (
    <div>
      <TextField
        placeholder="Enter name"
        label="Item name"
        fullWidth
        size="small"
        color="secondary"
      />
      <Grid container spacing={1} mt={1}>
        <Grid item xs>
          <TextField
            type="number"
            label="Price"
            placeholder={"0"}
            fullWidth
            size="small"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Ksh.</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs>
          <TextField
            type="number"
            label="Quantity"
            fullWidth
            size="small"
            color="secondary"
            value={1}
          />
        </Grid>
      </Grid>
      <div>
        <FormGroup sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Checkbox color="secondary" defaultChecked />}
            label="Item is taxable"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" defaultChecked={checked} />}
            label="Item requires shipping"
          />
        </FormGroup>
      </div>
      <div>
        <TextField
          size="small"
          color="secondary"
          sx={{ my: 2 }}
          fullWidth
          helperText="Used to accurately calculate shipping fees"
          label="Item weight (Optional)"
        />
      </div>
      <div>
        <Divider />
        <div>
          <Button
            onClick={toggle}
            color="inherit"
            sx={{ textTransform: "none", mt: 2 }}
          >
            Cancel
          </Button>
          <Button
            disabled
            color="secondary"
            sx={{ textTransform: "none", mt: 2, cursor: "not-allowed" }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const calculateTotal = (products) => {
  const valid = products.filter((p) => parseInt(p.price) > 0);
  if (valid.length < 1) return 0;
  const prices = valid.map((v) => parseInt(v.price));
  const total = prices.reduce(reducer);
  return total || 0;
};

const calculateTax = (products) => {
  const total = calculateTotal(products);
  const tax = (16 / 100) * total;
  return tax;
};

export default function OrderDraftForm() {
  const { goBack, push } = useHistory();
  const { id }: any = useParams();
  const { open, toggle } = useModalControls();
  const { stateDispatch }: any = useContext(StateContext);

  const [loading, setLoading] = useState(false);

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleSubmit = (v: any) => {
    if (v.products.length < 1) {
      alert("Add atleast one  product");
      return;
    }
    let data = v;
    data["products"] = v.products.map((p: any) => p.id);
    data["customer"] = v.customer.id;
    data["store"] = id;
    data["no"] = makeid(6);
    setLoading(true);
    axiosInstance
      .post(`/orders`, { ...data })
      .then(({ data }) => {
        stateDispatch({
          type: "ADD_ORDER",
          payload: data,
        });
        push(`/admin/${id}/orders/drafts`);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occured");
      });
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openP = Boolean(anchorEl);
  const pId = open ? "simple-popover" : undefined;

  const [discountOpen, setDiscountOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  const toggleDiscount = () => setDiscountOpen((d) => !d);
  const toggleShipping = () => setShippingOpen((s) => !s);

  return (
    <div style={{ paddingBottom: "42px" }}>
      <Button
        onClick={goBack}
        color="secondary"
        startIcon={<ArrowBackIos />}
        sx={{ textTransform: "none" }}
      >
        Create order
      </Button>

      <ModalDialog title="Add custom item" toggle={toggle} open={open}>
        <CustomItem toggle={toggle} />
      </ModalDialog>
      <ModalDialog
        title="Add discount"
        toggle={toggleDiscount}
        open={discountOpen}
      >
        <DiscountForm toggle={toggleDiscount} />
      </ModalDialog>
      <ModalDialog
        title="Add shipping"
        toggle={toggleShipping}
        open={shippingOpen}
      >
        <ShippingForm toggle={toggleShipping} />
      </ModalDialog>
      <Formik
        initialValues={{ products: [], customer: "" }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => {
          return (
            <Form>
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8} lg={8}>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        p: { lg: 4, xs: 1 },
                        borderRadius: "4px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginBottom: "12px",
                          color: "blue",
                          textDecoration: "underline",
                        }}
                        onClick={toggle}
                      >
                        Add a custom item
                      </div>
                      <ProductSelect
                        context="orders"
                        setFieldValue={setFieldValue}
                        values={values}
                      />
                    </Box>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        p: { lg: 4, xs: 1 },
                        borderRadius: "4px",
                        mt: 3,
                      }}
                    >
                      <div>
                        <Paper sx={{ width: "100%" }}>
                          <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                              <TableBody>
                                <TableRow>
                                  <TableCell padding="none">
                                    <Button
                                      disabled
                                      size="small"
                                      sx={{
                                        textTransform: "none",
                                        justifyContent: "flex-start",
                                      }}
                                    >
                                      Subtotal
                                    </Button>
                                  </TableCell>
                                  <TableCell padding="none"></TableCell>
                                  <TableCell
                                    align="right"
                                    padding="none"
                                    colSpan={2}
                                  >
                                    Ksh. {calculateTotal(values.products)}.0
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell padding="none">
                                    <Button
                                      disabled={values.products < 1}
                                      size="small"
                                      sx={{
                                        textTransform: "none",
                                        justifyContent: "flex-start",
                                      }}
                                      onClick={toggleDiscount}
                                    >
                                      Add discount
                                    </Button>
                                  </TableCell>
                                  <TableCell padding="none">-</TableCell>
                                  <TableCell padding="none" align="right">
                                    Ksh. 0.0
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell padding="none">
                                    <Button
                                      disabled={
                                        calculateTotal(values.products) < 1
                                      }
                                      size="small"
                                      sx={{
                                        textTransform: "none",
                                        justifyContent: "flex-start",
                                      }}
                                      onClick={toggleShipping}
                                    >
                                      Add shipping
                                    </Button>
                                  </TableCell>
                                  <TableCell padding="none">-</TableCell>
                                  <TableCell padding="none" align="right">
                                    Ksh. 0.0
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell padding="none">
                                    <Button
                                      disabled={
                                        calculateTotal(values.products) < 1
                                      }
                                      size="small"
                                      sx={{
                                        textTransform: "none",
                                        justifyContent: "flex-start",
                                      }}
                                      onClick={handleClick}
                                    >
                                      Tax
                                    </Button>
                                    <Popover
                                      id={pId}
                                      open={openP}
                                      anchorEl={anchorEl}
                                      onClose={handleClose}
                                      anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                      }}
                                    >
                                      <Box sx={{ p: 2 }}>
                                        <Typography>
                                          Taxes are automatically calculated.
                                        </Typography>
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              disabled
                                              color="secondary"
                                              defaultChecked
                                            />
                                          }
                                          label="Collect taxes"
                                        />
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                          }}
                                        >
                                          <div>
                                            <Button
                                              onClick={handleClose}
                                              color="inherit"
                                              variant="outlined"
                                              size="small"
                                              sx={{ textTransform: "none" }}
                                            >
                                              Cancel
                                            </Button>
                                          </div>
                                          <div>
                                            <Button
                                              size="small"
                                              sx={{ textTransform: "none" }}
                                              disabled
                                            >
                                              Apply
                                            </Button>
                                          </div>
                                        </div>
                                      </Box>
                                    </Popover>
                                  </TableCell>
                                  <TableCell padding="none">
                                    {calculateTotal(values.products) > 1
                                      ? "16% VAT"
                                      : "Not calculated"}
                                  </TableCell>
                                  <TableCell padding="none" align="right">
                                    Ksh. {calculateTax(values.products)}.0
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Total
                                  </TableCell>
                                  <TableCell></TableCell>
                                  <TableCell
                                    sx={{ fontWeight: "bold" }}
                                    align="right"
                                  >
                                    Ksh.{" "}
                                    {calculateTax(values.products) +
                                      parseInt(calculateTotal(values.products))}
                                    .0
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Paper>
                      </div>
                      <Divider sx={{ mt: 2, mb: 1 }} />
                      <p>
                        Add a product to calculate total and view payment
                        options.
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        p: { lg: 4, xs: 1 },
                        borderRadius: "4px",
                      }}
                    >
                      <SelectCustomer
                        customer={values.customer}
                        setFieldValue={setFieldValue}
                      />
                    </Box>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        p: { lg: 4, xs: 1 },
                        borderRadius: "4px",
                        mt: 3,
                      }}
                    >
                      <TextField
                        sx={{ mt: 3 }}
                        size="small"
                        multiline
                        fullWidth
                        color="secondary"
                        placeholder="Add customer notes"
                      />
                    </Box>
                    <Box
                      sx={{
                        bgcolor: "background.paper",
                        p: { lg: 4, xs: 1 },
                        borderRadius: "4px",
                        mt: 3,
                      }}
                    >
                      <TextField
                        sx={{ mt: 3 }}
                        disabled
                        size="small"
                        placeholder="Customer tags"
                      />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        disableElevation
                        color="secondary"
                        variant="contained"
                        size="small"
                        disabled={loading}
                        sx={{ my: 2, textTransform: "none" }}
                        type="submit"
                      >
                        Save
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
