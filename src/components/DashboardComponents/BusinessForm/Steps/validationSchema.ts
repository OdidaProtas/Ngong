import * as Yup from "yup";
import { phoneRegExp } from "../../../../constants";

const storeSchema: any = Yup.object().shape({
  industry: Yup.string()
    .required("Industry is required"),
  county: Yup.string().required("County is required"),
  subCounty: Yup.string().required("subCounty is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please provide your phone number"),
});

export default storeSchema;
