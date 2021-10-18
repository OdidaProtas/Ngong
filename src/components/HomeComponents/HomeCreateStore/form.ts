import * as Yup from "yup";
import { phoneRegExp } from "../../../constants";

const fields: any = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter a Store name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter email address",
    type: "email",
  },
  {
    label: "Phone",
    name: "phone",
    placeholder: "Enter phone number",
    type: "tel",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Create a password",
    type: "password",
  },
];

const validationSchema: any = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Name too long")
    .required("Name is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Could not validate phone number")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short"),
});

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

export { fields, validationSchema, initialState };
