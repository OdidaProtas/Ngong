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
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { axiosInstance } from "../../../../state";
import { StateContext } from "../../../../state/appstate";
import { ButtonWithLoaderComponent } from "../../../SharedComponents";
import DescriptionEditor from "../DescriptionEditor";
import MediaPicker from "../MediaPicker";
import DatePickerWidget from "../ProductFormWidgets/DatePickerWidget";
import SEO from "../ProductFormWidgets/SEO";
import Conditions from "./Conditions";

export default function CollectionForm() {
  const { goBack, push } = useHistory();
  const [loading, setLoading] = useState(false);
  const { id }: any = useParams();

  const { stateDispatch }: any = useContext(StateContext);

  const handleSubmit = (v) => {
    setLoading(true);
    axiosInstance
      .post(`/collections`, { ...v, store: id })
      .then(({ data }) => {
        setLoading(false);
        stateDispatch({ type: "ADD_COLLECTION", payload: data });
        push(`/admin/${id}/products/collections`);
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occured");
      });
  };
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
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ desc: "", mode: "automated" }}
      >
        {({ values, handleChange, errors, touched }) => {
          return (
            <Form>
              <Box>
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={8}>
                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <TextField
                        name="title"
                        required
                        onChange={handleChange}
                        label="Title"
                        placeholder="Under Ksh 100, Staff Picks, Breakfast"
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                      ></TextField>
                      <DescriptionEditor />
                    </Box>
                    <Box sx={{ bgcolor: "background.paper", my: 2, p: 2 }}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Collection type
                        </FormLabel>
                        <RadioGroup
                          sx={{ mt: 2 }}
                          aria-label="gender"
                          defaultValue={values.mode}
                          onChange={handleChange}
                          name="mode"
                        >
                          <FormControlLabel
                            value="manual"
                            control={<Radio size="small" color="secondary" />}
                            label="Manual"
                          />
                          <Typography sx={{ mb: 2 }} variant="caption">
                            Add products to this collection one by one. Learn
                            more about manual collections.
                          </Typography>
                          <FormControlLabel
                            value="automated"
                            control={<Radio size="small" color="secondary" />}
                            label="Automated"
                          />
                          <Typography variant="caption">
                            Existing and future products that match the
                            conditions you set will automatically be added to
                            this collection. Learn more about automated
                            collections.
                          </Typography>
                        </RadioGroup>
                      </FormControl>
                      <Divider sx={{ my: 2 }} />
                      {values.mode === "automated" && <Conditions />}
                    </Box>
                    <Box sx={{ my: 2, bgcolor: "background.paper", p: 2 }}>
                      <SEO values={values} handleChange={handleChange} />
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <Typography>Availability</Typography>
                      <DatePickerWidget
                        handleChange={handleChange}
                        values={values}
                      />
                    </Box>

                    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
                      <Typography>Collection Image</Typography>
                      <MediaPicker images={[]} setImages={undefined} />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 2,
                        justifyContent: "flex-end",
                      }}
                    >
                      <ButtonWithLoaderComponent
                        loading={loading}
                        title={"Save"}
                      ></ButtonWithLoaderComponent>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
