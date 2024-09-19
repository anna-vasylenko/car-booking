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
