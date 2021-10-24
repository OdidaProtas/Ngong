import IconButton from "@mui/material/IconButton/IconButton";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router";
import Divider from "@mui/material/Divider/Divider";
import Box from "@mui/system/Box/Box";
import { ButtonWithLoaderComponent } from "../../SharedComponents";
import CustomerFormOverview from "./CustomerFormOverview";
import {
  contactFields,
  notesFields,
  overviewFields,
  tagsFields,
} from "./customer.form";
import CustomerAddress from "./CustomerAddress";
import CustomerNotes from "./CustomerNotes";
import CustomerTags from "./CustomerTags";
export default function CustomerForm() {
  const history = useHistory();

  return (
    <div>
      <div>
        <IconButton
          onClick={() => history.goBack()}
          sx={{ marginRight: "18px" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <React.Fragment>ADD CUSTOMER</React.Fragment>
        <Divider sx={{ mt: 2 }} />
        <Box>
          <CustomerFormOverview fields={overviewFields} />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <CustomerAddress fields={contactFields} />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <CustomerNotes fields={notesFields} />
          <Divider sx={{ mt: 2, mb: 2 }} />
          <CustomerTags fields={tagsFields} />
          {/* <form> */}
          {/* </form> */}
        </Box>
      </div>
    </div>
  );
}
