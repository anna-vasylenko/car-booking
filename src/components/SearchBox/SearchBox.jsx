import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "react-select";
import { validationSchema } from "../../helpers/validationSchema";
import { useDispatch } from "react-redux";
import {
  changeSearchFilter,
  clearSearchFilter,
} from "../../redux/filters/slice";
import s from "./SearchBox.module.css";
import clsx from "clsx";
import { brandOptions, priceOptions } from "../../helpers/options";
import { fetchAll } from "../../redux/cars/operations";

const initialValues = {
  brand: "",
  price: "",
  min: "",
  max: "",
};

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { brand, price, min, max } = values;
    dispatch(fetchAll()).then(() => {
      dispatch(changeSearchFilter({ brand, price, mileage: { min, max } }));
    });
  };

  const handleClickCancel = (resetForm, setFieldValue) => {
    dispatch(clearSearchFilter());
    resetForm();
    setFieldValue("brand", "");
    setFieldValue("price", "");
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, resetForm, values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              Car brand
              <Select
                name="brand"
                placeholder="Enter the text"
                options={brandOptions}
                value={
                  brandOptions.find(
                    (option) => option.value === values.brand
                  ) || null
                }
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
                options={priceOptions}
                value={
                  priceOptions.find(
                    (option) => option.value === values.price
                  ) || null
                }
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
            <button
              type="button"
              className={s.searchBtn}
              onClick={() => handleClickCancel(resetForm, setFieldValue)}
            >
              Clear
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBox;
