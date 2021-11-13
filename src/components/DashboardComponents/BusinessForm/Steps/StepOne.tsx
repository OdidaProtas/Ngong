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

export default function StepOne() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { id }: any = useParams();
  const { url } = useRouteMatch();
  const next = () => {
    history.push(`${url}/step-two`);
  };

  const counties = getCountNames();

  const { store, dashboardDispatch }:any = useContext(DashboardContext);

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
        setLoading(false);
      });
  };

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
        }}
        validationSchema={storeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Box sx={{ minWidth: 120, marginTop: "30px" }}>
            <FormControl fullWidth variant="standard">
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native0090"
                    >
                      What industry will you be operating in?
                    </InputLabel>
                    <NativeSelect
                      onChange={handleChange}
                      value={values.industry}
                      error={touched.industry && Boolean(errors.industry)}
                      inputProps={{
                        name: "industry",
                        id: "uncontrolled-native0090",
                      }}
                    >
                      <option></option>
                      {categories.map((category: any) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
              
            </Box>
            <Grid container spacing={2}>
              <Grid sx={{ mt: 2 }} item xs={6}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    County
                  </InputLabel>
                  <NativeSelect
                    variant="outlined"
                    onChange={handleChange}
                    error={touched.county && Boolean(errors.county)}
                    value={values.county}
                    inputProps={{
                      name: "county",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option></option>
                    {counties.map((county: string) => (
                      <option key={county} value={county}>
                        {county}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: values.county === "" ? "none" : "block",
                    mt: 2,
                  }}
                >
                  <FormControl fullWidth variant="standard">
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native2"
                    >
                      Subcounty
                    </InputLabel>
                    <NativeSelect
                      onChange={handleChange}
                      value={values.subCounty}
                      error={touched.subCounty && Boolean(errors.subCounty)}
                      inputProps={{
                        name: "subCounty",
                        id: "uncontrolled-native2",
                      }}
                    >
                      <option></option>
                      {getSubcouties(values.county).map((sub: any) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3 }}>
              <TextField
                name={"address"}
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
                    name="isRegistered"
                    onChange={handleChange}
                    value={values.isRegistered}
                    color="secondary"
                  />
                }
                label="This is a registered business"
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
