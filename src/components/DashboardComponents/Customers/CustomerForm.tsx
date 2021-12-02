import IconButton from "@mui/material/IconButton/IconButton";
import React, { useContext } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory, useParams } from "react-router";
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
import { axiosInstance } from "../../../state";
import { StateContext } from "../../../state/appstate";
import useModalControls from "../../../hooks/modals/useModalControls";
export default function CustomerForm() {
  const history = useHistory();
  const { open, toggle } = useModalControls();
  const { id }: any = useParams();
  const { stateDispatch }: any = useContext(StateContext);
  const handleSubmit = (v) => {
    toggle();
    axiosInstance
      .post(`/customers`, { ...v, store: id })
      .then(({ data }) => {
        toggle();
        stateDispatch({
          type: "ADD_CUSTOMER",
          payload: data,
        });
        history.push(`/admin/${id}/customers`);
      })
      .catch((e) => {
        toggle();
        alert("an error ocurred");
      });
  };
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
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          {({ values, touched, errors, handleChange }) => {
            return (
              <Form>
                <Box>
                  <CustomerFormOverview
                    handleChange={handleChange}
                    fields={overviewFields}
                  />
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <CustomerAddress
                    handleChange={handleChange}
                    fields={contactFields}
                  />
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <CustomerNotes
                    handleChange={handleChange}
                    fields={notesFields}
                  />
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <CustomerTags />
                  <div
                    style={
                      {
                        height: 66,
                        position: "fixed",
                        bottom: 0,
                        background: "lightgray",
                        width: "90%",
                        zIndex: 100,
                        padding: 20,
                      } as any
                    }
                  >
                    <div style={{ position: "absolute" } as any}>
                      <ButtonWithLoaderComponent title="Save" loading={open} />
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
