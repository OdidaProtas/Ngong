import * as Yup from "yup";

const initialSignUpState = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

const signUpValidationSchema: any = Yup.object().shape({
  email: Yup.string()
    .min(2, "Business Name is too short")
    .required("Business name is required"),
  firstName: Yup.string()
    .min(2, "Description is too short")
    .required("Description is required"),
  lastName: Yup.string().required("Location details is required"),
  pasword: Yup.string().required("Location details is required"),
});

export { signUpValidationSchema, initialSignUpState };
