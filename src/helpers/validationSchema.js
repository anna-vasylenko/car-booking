import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  min: Yup.number().positive("Mileage must be positive"),
  max: Yup.number().positive("Mileage must be positive"),
});
