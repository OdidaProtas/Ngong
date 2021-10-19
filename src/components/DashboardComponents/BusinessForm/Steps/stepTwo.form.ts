import * as Yup from "yup";

const fields: any = [
  {
    label: "Store name",
    name: "store",
    placeholder: "Set a name for your store",
    type: "text",
  },
  {
    label: "Your name",
    name: "name",
    placeholder: "Enter your full name",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email address",
    type: "email",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Enter your location",
    type: "text",
  },
];

const validationSchema: any = Yup.object().shape({
  name: Yup.string().required("Your full name is required"),
  email: Yup.string().required("Email is required"),
  location: Yup.string().required("Location is required"),
  store: Yup.string().required("Store Name  is required"),
});

const initialState = {
  name: "",
  email: "",
  location: "",
  store: "",
};

export { fields, validationSchema, initialState };
