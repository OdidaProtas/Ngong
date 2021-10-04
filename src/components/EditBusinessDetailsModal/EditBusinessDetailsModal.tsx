import {
  Divider,
  Typography,
  Backdrop,
  TextField,
  Button,
} from "@mui/material";
import { Suspense } from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Formik, Form } from "formik";
import Modal from "@mui/material/Modal";
import useModalControls from "../../hooks/modals/useModalControls";
import { LogoComponent } from "../../components";
import useStyles from "./EditBusinessDetailsModal.styles";

import { fields as identityFields } from "../../components/BusinessFormSteps/StepOne";
import { fields as locationFields } from "../../components/BusinessFormSteps/StepTwo";
import { fields as contactFields } from "../../components/BusinessFormSteps/StepThree";

import { validationSchema as indentitySchema } from "../../components/BusinessFormSteps/StepOne";
import { validationSchema as locationSchema } from "../../components/BusinessFormSteps/StepTwo";
import { validationSchema as contactSchema } from "../../components/BusinessFormSteps/StepThree";

const allOptions: any = {
  identity: identityFields,
  location: locationFields,
  contact: contactFields,
};

const allValidation: any = {
  identity: indentitySchema,
  location: locationSchema,
  contact: contactSchema,
};

interface EditButtonInterface {
  context: any;
  innitialState: any;
}

const EditIconButton = ({ context, innitialState }: EditButtonInterface) => {
  const classes = useStyles();
  const { open, toggle } = useModalControls();
  const fields = allOptions[context];
  const validationSchema = allValidation[context];

  return (
    <div className={classes.editIcon}>
      <Typography onClick={toggle} variant="body2">
        Edit
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className={classes.logoContainer}>
              <Suspense fallback={<div></div>}>
                <LogoComponent />
              </Suspense>
            </div>
            <div className={classes.modalContent}>
              <Typography>Edit Business Details</Typography>
              <Formik
                initialValues={innitialState}
                validationSchema={validationSchema}
                onSubmit={(values) => {}}
              >
                {({ errors, touched, values, handleChange }) => (
                  <Form>
                    {fields.map((field: any, index: number) => {
                      const { name, label, type } = field;
                      return (
                        <TextField
                          key={index}
                          fullWidth
                          size="small"
                          name={name}
                          className={classes.textInput}
                          label={label}
                          error={touched[name] && Boolean(errors[name])}
                          value={values[name]}
                          onChange={handleChange}
                          helperText={touched[name] && errors[name]}
                          type={type}
                        />
                      );
                    })}
                    <Button
                      type="submit"
                      style={{ marginTop: "12px" }}
                      size="small"
                      fullWidth
                      variant="contained"
                    >
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditIconButton;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
