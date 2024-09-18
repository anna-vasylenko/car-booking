import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  brand: Yup.string().nullable().notRequired(),
  price: Yup.number()
    .nullable()
    .notRequired()
    .positive("Price must be a positive number"),
  min: Yup.number()
    .nullable()
    .notRequired()
    .typeError("Mileage must be a number")
    .positive("Mileage must be positive"),
  max: Yup.number()
    .nullable()
    .notRequired()
    .typeError("Mileage must be a number")
    .positive("Mileage must be positive")
    .moreThan(Yup.ref("min"), "Max mileage must be greater than min mileage"),
});
