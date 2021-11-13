import Add from "@mui/icons-material/Add";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import Search from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import { useHistory } from "react-router";
import useModalControls from "../../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../../SharedComponents";
import SupplierForm from "./SupplierForm";
import TagsWidget from "./TagsWidget";

export default function TransferForm() {
  const { goBack } = useHistory();
  const { toggle, open } = useModalControls();
  return (
    <div>
      <ModalDialog toggle={toggle} title="Add supplier" open={open}>
        <SupplierForm toggle={toggle} />
      </ModalDialog>
      <Button
        sx={{ textTransform: "none" }}
        color="secondary"
        onClick={() => goBack()}
        startIcon={<ArrowBackIosNew />}
        size="small"
      >
        Create inventory transfer
      </Button>

      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ bgcolor: "background.paper", p: 3 }}>
              <Typography>Origin</Typography>
              <TextField
                sx={{ mt: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="Add supplier">
                        <IconButton onClick={toggle}>
                          <Add />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                size="small"
                fullWidth
                placeholder="Search suppliers"
                color="secondary"
              ></TextField>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ bgcolor: "background.paper", p: 3 }}>
              <Typography>Destination</Typography>
              <TextField
                fullWidth
                sx={{ mt: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                size="small"
                placeholder="Search destination"
                color="secondary"
              ></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ bgcolor: "background.paper", my: 2, p: 3 }}>
        <Typography>Add Products</Typography>
        <TextField
          sx={{ mt: 2 }}
          color="secondary"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  disableElevation
                  sx={{ textTransform: "none" }}
                  color="inherit"
                  variant="outlined"
                  size="small"
                >
                  Browse
                </Button>
              </InputAdornment>
            ),
          }}
          size="small"
          placeholder="Search products"
        />
      </Box>
      <Box>
        <Grid mt={2} container spacing={2}>
          <Grid item xs>
            <Box sx={{ bgcolor: "background.paper", p: 3 }}>
              <Typography>Shipment Details</Typography>
              <TextField
                id="date"
                fullWidth
                size="small"
                label="Estimated arrival"
                type="date"
                defaultValue="2022-01-01"
                sx={{ width: 220, mt: 2 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                fullWidth
                sx={{ my: 2 }}
                size="small"
                color="secondary"
                label="Tracking number"
              ></TextField>
              <FormControl color="secondary" size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Shipping Carrier
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Shipping Carrier"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Sendy</MenuItem>
                  <MenuItem value={20}>Amitruck</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ my: 2 }}
                label="Tracking URL"
                fullWidth
                size="small"
                color="secondary"
              />
            </Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ bgcolor: "background.paper", p: 3 }}>
              <Typography>Additional details</Typography>
              <TextField
                sx={{ my: 2 }}
                label="Reference number"
                fullWidth
                size="small"
                color="secondary"
              />
            </Box>
            <Box sx={{ my: 2, bgcolor: "background.paper" }}>
              <TagsWidget />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
