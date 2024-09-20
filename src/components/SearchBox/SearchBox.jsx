import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import Select from "react-select";
import clsx from "clsx";

import {
  changeSearchFilter,
  clearSearchFilter,
} from "../../redux/filters/slice";
import { brandOptions, priceOptions } from "../../helpers/options";
import { initialValues } from "../../helpers/initialValues";
import {
  formatNumber,
  handleNumeralInputChange,
} from "../../helpers/numbersFormat";

import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { brand, price, min, max } = values;
    dispatch(changeSearchFilter({ brand, price, mileage: { min, max } }));
  };

  const handleClickCancel = (resetForm, setFieldValue) => {
    dispatch(clearSearchFilter());
    resetForm();
    setFieldValue("brand", "");
    setFieldValue("price", "");
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
              <div className={s.inputsWrapper}>
                <div className={s.wrapper}>
                  <span className={s.span}>From</span>
                  <Field
                    name="min"
                    type="text"
                    value={formatNumber(values.min)}
                    onChange={(e) =>
                      handleNumeralInputChange(e, setFieldValue, "min")
                    }
                    className={clsx(s.input, s.inputFrom)}
                  />
                </div>
                <div className={s.wrapper}>
                  <span className={s.span}>To</span>
                  <Field
                    name="max"
                    type="text"
                    value={formatNumber(values.max)}
                    onChange={(e) =>
                      handleNumeralInputChange(e, setFieldValue, "max")
                    }
                    className={clsx(s.input, s.inputTo)}
                  />
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
