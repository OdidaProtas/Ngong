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
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";
export default function CustomerForm() {
  const history = useHistory();

  return (
    <div>
      <div>
        <Button
          onClick={() => history.goBack()}
          size="small"
          color="secondary"
          sx={{ marginRight: "18px", textTransform: "none" }}
          startIcon={<ArrowBackIosIcon />}
        >
          Add customer
        </Button>
        <Divider sx={{ mt: 2 }} />
        <Formik
          initialValues={{}}
          onSubmit={function (values) {
            console.log(values);
          }}
        >
          {({ values, touched, errors, handleChange }) => {
            return (
              <Form>
                <Box>
                  <CustomerFormOverview fields={overviewFields} />
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <CustomerAddress fields={contactFields} />
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <CustomerNotes fields={notesFields} />
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <CustomerTags />
                  <div
                    style={{
                      height: 66,
                      position: "fixed",
                      bottom: 0,
                      background: "lightgray",
                      width: "90%",
                      zIndex: 100,
                      padding:20,
                    } as any}
                  >
                    <div style={{position:"absolute"} as any}>
                      <Button color="secondary" disableElevation sx={{textTransform:"none"}} variant="contained" type="submit">Save</Button>
                    </div>
                  </div>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
