import * as Yup from "yup";

const productValidation: any = Yup.object().shape({
  title: Yup.string().required("Product name is required"),
});

export default productValidation;
