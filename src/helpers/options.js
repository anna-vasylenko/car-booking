const brands = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

export const brandOptions = brands.map((item) => ({
  value: item,
  label: item,
}));

const array = Array.from({ length: 20 }, (_, i) => 10 + i * 10);

export const priceOptions = array.map((item) => ({
  value: item,
  label: item,
}));
