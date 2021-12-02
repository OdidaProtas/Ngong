import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { ButtonWithLoaderComponent } from "../../../SharedComponents";
import ActiveDates from "./ActiveDates";
import CustomerBuys from "./CustomerBuys";
import Eligibility from "./Eligibility";
import Limit from "./Limit";
import Types from "./Types";

export default function DiscountForm() {
  const history = useHistory();
  const { path } = useRouteMatch();
  const isAuto = path.includes("auto");
  const handleSubmit = (v) => {
    console.log(v);
  };
  return (
    <div>
      <Button
        color="secondary"
        onClick={history.goBack}
        size="small"
        disableRipple
        sx={{ textTransform: "none" }}
        startIcon={<ArrowBackIos />}
      >
        Create {isAuto ? "automatic" : ""} discount
      </Button>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {({ values, handleChange, setFieldValue, errors, touched }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={8}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      p: 1,
                      mt: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        disableRipple
                        size="small"
                        color="secondary"
                        sx={{ textTransform: "none" }}
                      >
                        Generate code
                      </Button>
                    </Box>
                    <div>
                      <TextField
                        label="Discount code"
                        sx={{ mt: 2, mb: 2 }}
                        fullWidth
                        color="secondary"
                        size="small"
                        placeholder="Enter discount code"
                      />
                    </div>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      p: 1,
                      mt: 3,
                    }}
                  >
                    <Types />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      p: 1,
                      mt: 3,
                    }}
                  >
                    <CustomerBuys />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      p: 1,
                      mt: 3,
                    }}
                  >
                    <Eligibility />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      p: 1,
                      mt: 3,
                    }}
                  >
                    <Limit />
                  </Box>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: "4px",
                      p: 1,
                      mt: 3,
                    }}
                  >
                    <ActiveDates />
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Box
                    sx={
                      {
                        bgcolor: "background.paper",
                        borderRadius: "4px",
                        p: 1,
                        mt: 3,
                        position: "fixed",
                        width: "25%",
                      } as any
                    }
                  >
                    SUMMARY
                    <Box>
                    <ButtonWithLoaderComponent loading={false} title="save" />
                  </Box>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
