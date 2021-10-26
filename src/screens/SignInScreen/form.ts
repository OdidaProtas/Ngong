import * as Yup from "yup";

const initialSignUpState = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

const signUpValidationSchema: any = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  firstName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Name too long")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short")
    .max(50, "Name too long")
    .required("Last name is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(6, "Password is too short"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ).required("Please re-enter your password"),
});

export { signUpValidationSchema, initialSignUpState };
