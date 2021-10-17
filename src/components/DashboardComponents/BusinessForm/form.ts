import * as Yup from "yup";

const fields: any = [
  {
    label: "Description",
    name: "description",
    placeholder: "Business Description",
    type: "text",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Location",
    type: "text",
  },
  {
    label: "Business Phone",
    name: "location",
    placeholder: "Enter business phone",
    type: "number",
  },
  {
    label: "Business Email",
    name: "location",
    placeholder: "Location",
    type: "text",
  },
  {
    label: "Business Website",
    name: "location",
    placeholder: "Location",
    type: "text",
  },
];

const validationSchema: any = Yup.object().shape({
  name: Yup.string()
    .min(2, "Business Name is too short")
    .required("Business name is required"),
  description: Yup.string()
    .min(2, "Description is too short")
    .required("Description is required"),
  location: Yup.string().required("Location details is required"),
});

const initialState = {
  name: "",
  description: "",
  location: "",
};

export { fields, validationSchema, initialState };
