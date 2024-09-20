import { createSelector } from "@reduxjs/toolkit";
import { selectAllCars } from "../cars/selectors";

export const selectFilters = (state) => state.filter;
export const selectFilterApplied = (state) => state.filter.filterApplied;

export const selectFilteredCars = createSelector(
  [selectAllCars, selectFilters],
  (cars, filter) => {
    const { brand, price, mileage } = filter;

    const filteredCars = cars.filter((car) => {
      const matchesMake = brand ? car.make === brand : true;

      const carRentalPrice = +car.rentalPrice.replace("$", "");
      const matchesPrice = price ? carRentalPrice <= price : true;

      const carMileage = car.mileage;
      const minMileage = mileage.min ? +mileage.min : 0;
      const maxMileage = mileage.max ? +mileage.max : Infinity;

      const matchesMileage =
        carMileage >= minMileage && carMileage <= maxMileage;

      return matchesMake && matchesPrice && matchesMileage;
    });

    return filteredCars;
  }
);
