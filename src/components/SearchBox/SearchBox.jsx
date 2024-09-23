import { useDispatch } from "react-redux";
import { useId } from "react";
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

  const brandFieldId = useId();
  const priceFieldId = useId();
  const minFieldId = useId();
  const maxFieldId = useId();

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
            <div className={s.formGroup}>
              <label className={s.label} htmlFor={brandFieldId}>
                Car brand
              </label>
              <Select
                id={brandFieldId}
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
            </div>

            <div className={s.formGroup}>
              <label htmlFor={priceFieldId}>Price/ 1 hour</label>
              <Select
                id={priceFieldId}
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
            </div>

            <fieldset className={s.formGroup}>
              <legend className={s.legend}>Сar mileage / km</legend>
              <div className={s.inputsWrapper}>
                <div className={s.wrapper}>
                  <label className={s.span} htmlFor={minFieldId}>
                    From
                  </label>
                  <Field
                    id={minFieldId}
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
                  <label htmlFor={maxFieldId} className={s.span}>
                    To
                  </label>
                  <Field
                    id={maxFieldId}
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
            </fieldset>

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
