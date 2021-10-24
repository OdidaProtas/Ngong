import Button from "@mui/material/Button/Button";
import React, { useContext, useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useHistory, useRouteMatch } from "react-router";
import { firestore } from "../../../../state/firebase/firebase";
import { AuthContext } from "../../../../state";
import { ButtonWithLoaderComponent } from "../../../SharedComponents";

export default function StepOne() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext) as any;
  const { path, url } = useRouteMatch();
  const next = () => {
    history.push(`${url}/step-two`);
  };

  const [hasStore, setHasStore] = React.useState("");
  const [currentRevenue, setCurrentRevenue] = React.useState("");
  const [industry, setIndustry] = React.useState("");

  const handleStoreChange = (event: SelectChangeEvent) => {
    setHasStore(event.target.value as string);
  };

  const handleRevenueChange = (event: SelectChangeEvent) => {
    setCurrentRevenue(event.target.value as string);
  };

  const handleIndustryChange = (event: SelectChangeEvent) => {
    setIndustry(event.target.value as string);
  };

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    const value = {
      hasStore,
      currentRevenue,
      industry,
      hasProfile: true,
    };
    const id = user.uid;
    firestore
      .collection("profiles")
      .add({
        ...value,
        uid: id,
      })
      .then((docRef) => {
        setLoading(false);
        next();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      {/* STEP ONE */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ minWidth: 120, marginTop: "30px" }}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-label">
              Are you already selling?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hasStore}
              label="Are you already selling?"
              onChange={handleStoreChange}
            >
              <MenuItem value={"true"}>I'm not selling products yet</MenuItem>
              <MenuItem value={"false"}>
                I'm selling in a different way
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120, marginTop: "30px" }}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-label-2">
              What is your current revenue?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={currentRevenue}
              label="What is your current revenue?"
              onChange={handleRevenueChange}
            >
              <MenuItem value={"5000"}>0 - Kes 5000</MenuItem>
              <MenuItem value={"10000"}>Kes 5, 001 - Kes 10, 000</MenuItem>
              <MenuItem value={"50000"}>Kes 10, 001 - Kes 50, 000</MenuItem>
              <MenuItem value={"60000"}>Kes 50, 000 Plus (+) </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120, marginTop: "30px" }}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-label-3">
              What industry will you be operating in?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label-3"
              id="demo-simple-select-3"
              value={industry}
              label="What industry will you be operating in?"
              onChange={handleIndustryChange}
            >
              <MenuItem value={"beauty"}>Beauty</MenuItem>
              <MenuItem value={"clothing"}>Clothing</MenuItem>
              <MenuItem value={"electronics"}>Electronics</MenuItem>
              <MenuItem value={"furniture"}>Furniture</MenuItem>
              <MenuItem value={"jewelry"}>Jewelry</MenuItem>
              <MenuItem value={"painting"}>Painting</MenuItem>
              <MenuItem value={"photography"}>Photography</MenuItem>
              <MenuItem value={"restaurants"}>Restaurants</MenuItem>
              <MenuItem value={"groceries"}>Groceries</MenuItem>
              <MenuItem value={"otherfood"}>Other Food and Drinks</MenuItem>
              <MenuItem value={"sports"}>Sports</MenuItem>
              <MenuItem value={"toys"}>Toys</MenuItem>
              <MenuItem value={"services"}>Services</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "36px",
          }}
        >
          <ButtonWithLoaderComponent loading={loading} title={"Next"} />
        </div>
      </form>
    </div>
  );
}
