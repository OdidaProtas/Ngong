import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import TbFallBack from "../../../../screens/StoreSelectionScreen/TbFallBack";
import { axiosInstance } from "../../../../state";
import { StateContext } from "../../../../state/appstate";

export default function Duplicate({ value, toggle }: any) {
  const [state, setState]: any = useState({
    ...value,
    title: `Copy of ${value.title}`,
    status: "draft",
    id: "",
  });

  const { stateDispatch, myProducts }: any = useContext(StateContext);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [sel, setSel]: any = useState({});
  const onChange = (e) => {
    setSel({ ...sel, [e.target.name]: e.target.value });
  };

  const { id }: any = useParams();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = () => {
    setLoading(true);
    const data = { ...state };
    if (!sel.skus) delete data["sku"];
    if (!sel.quantity) delete data["quantity"];
    if (!sel.barcode) delete data["barcode"];
    delete data["id"];
    console.log(sel);
    axiosInstance
      .post(`/products/${id}`, data)
      .then((res) => {
        setLoading(false);
        stateDispatch({ type: "ADD_PRODUCT", payload: res.data });
        history.push(`/admin/${id}/products/${res.data.id}`);
        toggle();
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occured");
      });
  };

  if (!myProducts) return <TbFallBack />;

  return (
    <div>
      <TextField
        label="Title"
        sx={{ mt: 1 }}
        autoFocus
        name="title"
        onChange={handleChange}
        value={state.title}
        size="small"
        fullWidth
      ></TextField>
      <Divider sx={{ my: 2 }} />
      <Typography>
        Select details to copy. All other details except 3D models and videos
        will be copied from the original product and any variants.
      </Typography>
      <Box sx={{ my: 3 }}>
        <FormGroup>
          {/* <FormControlLabel
            control={
              <Checkbox
                onChange={onChange}
                value={true}
                name="images"
                color="secondary"
              />
            }
            label="Images"
          /> */}
          <FormControlLabel
            control={
              <Checkbox
                value={true}
                name="skus"
                onChange={onChange}
                color="secondary"
              />
            }
            label="SKUs"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={true}
                name="barcode"
                onChange={onChange}
                color="secondary"
              />
            }
            label="Barcodes"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={true}
                name="quantity"
                onChange={onChange}
                color="secondary"
              />
            }
            label="Inventory Quantities"
          />
        </FormGroup>
      </Box>
      <Box>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            value={state.status}
            name="status"
            onChange={handleChange}
          >
            <FormControlLabel
              value="draft"
              control={<Radio color="secondary" />}
              label="Set as draft"
            />
            <br />
            <FormControlLabel
              value="active"
              control={<Radio color="secondary" />}
              label="Set as active"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <Button
            color="inherit"
            disableElevation
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={toggle}
          >
            Cancel
          </Button>
        </Box>
        <Box>
          <Box>
            <Button
              onClick={onSubmit}
              disabled={loading}
              disableElevation
              color="secondary"
              variant="contained"
              sx={{ textTransform: "none", mt: 2, ml: 2 }}
            >
              Duplicate
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
