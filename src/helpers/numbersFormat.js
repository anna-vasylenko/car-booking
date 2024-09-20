import numeral from "numeral";

export const getRentalConditions = (car) => {
  const { rentalConditions, rentalPrice, mileage } = car;

  const rentalConditionsArray = rentalConditions.split("\n");

  const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  const formatValue = (label, value) => ({
    label: `${label}:`,
    value: isNumber(value) ? numeral(value).format("0,0") : value,
  });

  const combinedData = rentalConditionsArray.map((cond) => {
    const [label, value] = cond.split(":").map((part) => part.trim());
    return value ? formatValue(label, value) : { label: cond, value: null };
  });

  return [
    ...combinedData,
    formatValue("Mileage", mileage),
    formatValue("Price", rentalPrice),
  ];
};

export const formatNumber = (value) => {
  if (!value) return "";
  return numeral(value).format("0,0");
};

export const handleNumeralInputChange = (e, setFieldValue, fieldName) => {
  const rawValue = e.target.value.replace(/,/g, "");
  if (!isNaN(rawValue)) {
    setFieldValue(fieldName, rawValue);
  }
};
