import * as Yup from "yup";
import { phoneRegExp } from "../../../constants";

const fields: any = [
  {
    label: "Phone number",
    name: "phone",
    placeholder: "Enter your phone number",
    type: "text",
  },
];

const validationSchema: any = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, "Could not validate phone number")
    .required("Phone number is required"),
});

const initialState = {
  phone: "",
};

export { fields, validationSchema, initialState };
