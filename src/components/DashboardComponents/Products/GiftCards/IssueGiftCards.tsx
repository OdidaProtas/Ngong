import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import { useHistory } from "react-router";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import DatePickerWidget from "../ProductFormWidgets/DatePickerWidget";
import Search from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import useModalControls from "../../../../hooks/modals/useModalControls";
import { ModalDialog } from "../../../SharedComponents";
import CustomerPopup from "./CustomerPopup";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function IssueGiftCards() {
  const { goBack } = useHistory();
  const onChange = () => {};
  const { open, toggle } = useModalControls();
  return (
    <div>
      <ModalDialog title="Add customer" open={open}>
        <CustomerPopup toggle={toggle} />
      </ModalDialog>
      <Button
        size="small"
        color="secondary"
        sx={{ textTransform: "none" }}
        onClick={() => goBack()}
        startIcon={<ArrowBackIos />}
      >
        Issue gift card
      </Button>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: "4px",
              mt: 1,
            }}
          >
            <Typography>Gift card details</Typography>
            <TextField
              value="6da3h0ef888c4537"
              size="small"
              label="Gift card code"
              sx={{ mt: 2 }}
              onChange={onChange}
              fullWidth
              color="secondary"
            />
            <TextField
              value={0}
              onChange={onChange}
              size="small"
              type="number"
              label="Innitial value"
              sx={{ mt: 3 }}
              fullWidth
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Ksh</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: "4px",
              mt: 1,
            }}
          >
            <Typography>Expiration Date</Typography>
            <Typography
              variant="caption"
              sx={{ my: 3, color: "text.secondary", display: "block" }}
            >
              Countries have different laws for gift card expiry dates. Check
              the laws for your country before changing this date.
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="secondary" size="small" />}
                  label="No expiration date"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="secondary" size="small" />}
                  label="Set expiration date"
                />
              </RadioGroup>
            </FormControl>
            <Divider sx={{ my: 2 }} />
            <DatePickerWidget handleChange={undefined} values={{}} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: "4px",
              mt: 1,
            }}
          >
            <Typography>Find or create customer </Typography>
            <Typography
              sx={{ display: "block", my: 2, color: "text.secondary" }}
              variant="caption"
            >
              To send the gift card code, add a customer with an email address
              or phone number.
            </Typography>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Add customer">
                      <IconButton onClick={toggle}>
                        <Add />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              size="small"
              fullWidth
              placeholder="Search customers"
              color="secondary"
            ></TextField>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: "4px",
              mt: 1,
            }}
          >
            <Typography>Notes </Typography>
            <Typography
              sx={{ display: "block", my: 2, color: "text.secondary" }}
              variant="caption"
            >
              These notes are private and won't be shared with the customer.
            </Typography>
            <TextField
              fullWidth
              placeholder="Add a note"
              multiline
              color="secondary"
            ></TextField>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
