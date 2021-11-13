import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Formik } from "formik";
import { useHistory } from "react-router";
import DescriptionEditor from "../DescriptionEditor";
import MediaPicker from "../MediaPicker";
import DatePickerWidget from "../ProductFormWidgets/DatePickerWidget";
import SEO from "../ProductFormWidgets/SEO";
import Conditions from "./Conditions";

export default function CollectionForm() {
  const { goBack } = useHistory();
  return (
    <div>
      <Button
        sx={{ textTransform: "none", mb: 1 }}
        color="secondary"
        onClick={() => goBack()}
        startIcon={<ArrowBackIosNew />}
        size="small"
      >
        Create collection
      </Button>

      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={{ desc: "" }}
              onSubmit={function (values) {}}
            >
              {({ values, errors, touched, handleChange }) => {
                return (
                  <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                    <TextField
                      label="Title"
                      placeholder="Under Ksh 100, Staff Picks, Breakfast"
                      size="small"
                      fullWidth
                      sx={{ mb: 2 }}
                    ></TextField>
                    <DescriptionEditor />
                  </Box>
                );
              }}
            </Formik>
            <Box sx={{ bgcolor: "background.paper", my: 2, p: 2 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Collection type</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" color="secondary" />}
                    label="Manual"
                  />
                  <Typography sx={{ mb: 2 }} variant="caption">
                    Add products to this collection one by one. Learn more about
                    manual collections.
                  </Typography>
                  <FormControlLabel
                    value="male"
                    control={<Radio size="small" color="secondary" />}
                    label="Automated"
                  />
                  <Typography variant="caption">
                    Existing and future products that match the conditions you
                    set will automatically be added to this collection. Learn
                    more about automated collections.
                  </Typography>
                </RadioGroup>
              </FormControl>
              <Divider sx={{ my: 2 }} />
              <Conditions />
            </Box>
            <Box sx={{ my: 2, bgcolor: "background.paper", p: 2 }}>
              <SEO values={{}} handleChange={undefined} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box sx={{ bgcolor: "background.paper", p: 3 }}>
              <Typography>Availability</Typography>
              <DatePickerWidget handleChange={undefined} values={{}} />
            </Box>

            <Box sx={{ bgcolor: "background.paper", p: 3 }}>
              <Typography>Collection Image</Typography>
              <MediaPicker images={[]} setImages={undefined} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
