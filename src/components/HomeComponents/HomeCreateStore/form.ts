import * as Yup from "yup";

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
    .min(2, "Business Name is too short")
    .required("Business name is required"),
  email: Yup.string()
    .min(2, "Description is too short")
    .required("Description is required"),
  phone: Yup.string().required("Location details is required"),
});

const initialState = {
  name: "",
  email: "",
  phone: "",
  password:""
};

export { fields, validationSchema, initialState };
