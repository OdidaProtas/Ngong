import * as Yup from "yup";

const fields: any = [
  {
    label: "Business phone",
    name: "phone",
    placeholder: "Business Phone Number",
    type: "number",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email address",
    type: "email",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "Enter your address",
    type: "text",
  },
  {
    label: "Apartment",
    name: "apartment",
    placeholder: "Apartment, Suite etc",
    type: "text",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Enter your location",
    type: "text",
  },
];

const validationSchema: any = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  location: Yup.string().required("Location is required"),
});

const initialState = {
  email: "",
  location: "",
};

export { fields, validationSchema, initialState };
