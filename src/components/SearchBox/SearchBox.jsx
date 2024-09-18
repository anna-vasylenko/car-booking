import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import { options } from "../../helpers/brands";
import { prices } from "../../helpers/prices";
// import { validationSchema } from "../../helpers/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchFilter } from "../../redux/filters/slice";
import { selectFilteredCars } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";
import clsx from "clsx";

const initialValues = {
  brand: "",
  price: "",
  min: "",
  max: "",
};

const SearchBox = () => {
  const dispatch = useDispatch();
  const carsFi = useSelector(selectFilteredCars);

  const handleSubmit = (values) => {
    const { brand, price, min, max } = values;
    dispatch(changeSearchFilter({ brand, price, mileage: { min, max } }));
    console.log(carsFi);
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form className={s.form}>
            <label className={s.label}>
              Car brand
              <Select
                name="brand"
                placeholder="Enter the text"
                options={options}
                onChange={(selectedOption) =>
                  setFieldValue(
                    "brand",
                    selectedOption ? selectedOption.value : ""
                  )
                }
                classNamePrefix="react-select"
                className={clsx(s.selectInput, s.selectBrand)}
              />
            </label>

            <label>
              Price/ 1 hour
              <Select
                name="price"
                placeholder="To $"
                options={prices}
                onChange={(selectedOption) =>
                  setFieldValue(
                    "price",
                    selectedOption ? selectedOption.value : ""
                  )
                }
                classNamePrefix="react-select"
                className={clsx(s.selectInput, s.selectPrice)}
              />
            </label>

            <label>
              Сar mileage / km
              <div className={s.inputWrapper}>
                <div>
                  <Field
                    name="min"
                    type="number"
                    placeholder="From"
                    className={clsx(s.input, s.inputFrom)}
                  />
                  <ErrorMessage name="min" component="span" />
                </div>
                <div>
                  <Field
                    name="max"
                    type="number"
                    placeholder="To"
                    className={clsx(s.input, s.inputTo)}
                  />
                  <ErrorMessage name="max" component="span" />
                </div>
              </div>
            </label>

            <button type="submit" className={s.searchBtn}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBox;
