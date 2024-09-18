const array = Array.from({ length: 12 }, (_, i) => 10 + i * 10);

export const prices = array.map((item) => ({
  value: item,
  label: item,
}));
