import * as yup from "yup";

export const AddDataScheme = yup.object().shape({
  name: yup.string().required("Product name is required"),
  price: yup
    .number()
    .positive("Product price should be positive number")
    .required("Product price is required"),
  image: yup.string().required("Product image is required")
});
