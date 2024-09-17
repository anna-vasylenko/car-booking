export const selectCars = (state) => state.cars.items;
export const selectCurrentCar = (state) => state.cars.currentCar;
export const selectPage = (state) => state.cars.page;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectIsError = (state) => state.cars.isError;
export const selectIsLastPage = (state) => state.cars.isLastPage;
