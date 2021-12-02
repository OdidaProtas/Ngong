import Button from "@mui/material/Button/Button";
import React, { useContext, useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { AuthContext, axiosInstance } from "../../../../state";
import { ButtonWithLoaderComponent } from "../../../SharedComponents";
import { getCountNames, getSubcouties } from "../../../../state/data/locations";
import Grid from "@mui/material/Grid";
import NativeSelect from "@mui/material/NativeSelect";

import kenya from "../../../../assets/images/kenya.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import categories from "../../../../state/data/categories";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Container from "@mui/material/Container";
import { Form, Formik } from "formik";
import storeSchema from "./validationSchema";
import DashboardContext from "../../../../navigation/DashboardNavigation/state";
import Autocomplete from "@mui/material/Autocomplete";

export default function StepOne() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { id }: any = useParams();
  const { url } = useRouteMatch();
  const next = () => {
    history.push(`${url}/step-two`);
  };

  const counties = getCountNames();

  const { store, dashboardDispatch }: any = useContext(DashboardContext);

  const handleSubmit = (values) => {
    setLoading(true);
    axiosInstance
      .post(`/stores/${id}`, values)
      .then((res) => {
        setLoading(false);
        dashboardDispatch({
          type: "ADD_STORE",
          payload: { ...store, profile: res.data },
        });
        history.push(`/admin/${id}`);
      })
      .catch((e) => {
        alert("An error occured");
        setLoading(false);
      });
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container>
      {/* STEP ONE */}

      <Formik
        initialValues={{
          industry: "",
          subCounty: "",
          county: "",
          address: "",
          apartment: "",
          phoneNumber: "",
          isRegistered: false,
          terms:false
        }}
        validationSchema={storeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange, setFieldValue }) => (
          <Form>
            <Box sx={{ minWidth: 120, marginTop: "30px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(e, v) => setFieldValue("industry", v)}
                options={categories.map((o) => capitalizeFirstLetter(o))}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    required
                    label="What industry will you be operating in?"
                    placeholder="What industry will you be operating in?"
                    color="secondary"
                    {...params}
                  />
                )}
              />
            </Box>
            <Grid container spacing={2}>
              <Grid sx={{ mt: 2 }} item xs={6}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  onChange={(e, v) => setFieldValue("county", v)}
                  options={counties}
                  renderInput={(params) => (
                    <TextField
                      required
                      fullWidth
                      label="County"
                      placeholder="Your County"
                      color="secondary"
                      {...params}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: values.county === "" ? "none" : "block",
                    mt: 2,
                  }}
                >
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    onChange={(e, v) => setFieldValue("subCounty", v)}
                    options={getSubcouties(values.county)}
                    renderInput={(params) => (
                      <TextField
                        required
                        fullWidth
                        label="Subcounty"
                        placeholder="Your subcounty"
                        color="secondary"
                        {...params}
                      />
                    )}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
              <TextField
                name={"address"}
                color="secondary"
                onChange={handleChange}
                value={values.address}
                helperText={touched.address && errors.address}
                error={touched.address && Boolean(errors.address)}
                label="Address"
                placeholder="Enter your address "
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <TextField
                label="Apartment"
                color="secondary"
                name="apartment"
                value={values.apartment}
                helperText={touched.apartment && errors.apartment}
                error={touched.apartment && Boolean(errors.apartment)}
                onChange={handleChange}
                placeholder="Apartment, Suite, etc... "
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <TextField
                name="phoneNumber"
                color="secondary"
                onChange={handleChange}
                value={values.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                label="Phone number"
                type="tel"
                placeholder="07 "
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img height="20" src={kenya} alt="" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </Box>

            <FormGroup>
              <FormControlLabel
                sx={{ mt: 2 }}
                control={
                  <Checkbox
                    required
                    name="isRegistered"
                    onChange={handleChange}
                    value={values.isRegistered}
                    color="secondary"
                  />
                }
                label="This is a registered business"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                sx={{ mt: 2 }}
                control={
                  <Checkbox
                    required
                    name="terms"
                    onChange={handleChange}
                    value={values.terms}
                    color="secondary"
                  />
                }
                label="Accept MyBizz terms and conditions"
              />
            </FormGroup>
            <Box sx={{ mt: 3 }}>
              <ButtonWithLoaderComponent loading={loading} title={"Next"} />
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
