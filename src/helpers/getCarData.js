export const getCarDescription = (car) => {
  const addressParts = car.address.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();
  const rentalCompany = car.rentalCompany;
  const type = car.type;
  const model = car.model;
  const id = car.id;
  const firstFunctionality = car.functionalities[0];

  return [city, country, rentalCompany, type, model, id, firstFunctionality];
};

export const getCarDescriptionForModal = (car) => {
  const addressParts = car.address.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();
  const id = car.id;
  const year = car.year;
  const type = car.type;
  const fuelConsumption = car.fuelConsumption;
  const engineSize = car.engineSize;

  return [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];
};
