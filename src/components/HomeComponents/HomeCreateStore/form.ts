import * as Yup from "yup";
import { phoneRegExp } from "../../../constants";

const fields: any = [
  {
    label: "Store name",
    name: "store",
    placeholder: "Set a name for your store",
    type: "text",
  },
  {
    label: "Yout name",
    name: "name",
    placeholder: "Enter your full name",
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
