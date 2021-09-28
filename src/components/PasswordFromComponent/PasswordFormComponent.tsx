import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import phoneRegExp from "../../constants/phoneRegExp";

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

const validationSchemas: any = {
  changePassword: Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short"),
  }),
  forgotPassword: Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Could not validate phone number")
      .required("Phone number is required"),
  }),
  resetPassword: Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "Could not validate phone number")
      .required("Phone number is required"),
    code: Yup.string().test(
      "len",
      "Must be exactly 6 characters",
      (val: any) => val.length === 6
    ),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short"),
  }),
};

const passwordFormFields: any = {
  changePassword: {
    fields: [
      { name: "newPassword", label: "New Password" },
      { name: "currentPassword", label: "Current Password" },
    ],
  },
  forgotPassword: {
    fields: [{ name: "phone", label: "Enter phone number" }],
  },
  resetPassword: {
    fields: [
      { name: "phone", label: "Enter Phone Number" },
      { name: "code", label: "Verification Code" },
      { name: "password", label: "New Password" },
    ],
  },
};

interface PasswordFormInterface {
  context: string;
}

export default function PasswordFormComponent({
  context,
}: PasswordFormInterface) {
  const handleClose = () => {};

  const fields = passwordFormFields[context];
  const validationSchema = validationSchemas[context];

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Reset Password
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
