export const productCategories = [
  { label: "Phones", value: 55.4 },
  { label: "Laptops", value: 32.1 },
  { label: "Tablets", value: 12.5 },
];

export const phoneBrands = [
  { label: "iPhone", value: 30 },
  { label: "Samsung", value: 45 },
  { label: "Xiaomi", value: 15 },
  { label: "Other", value: 10 },
];
export const laptopBrands = [
  { label: "MacBook", value: 35 },
  { label: "HP", value: 25 },
  { label: "Lenovo", value: 20 },
  { label: "Other", value: 20 },
];

const normalize = (v: number, v2: number) =>
  Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...productCategories.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other (Mobile)" : v.label,
    value: normalize(v.value, phoneBrands[0].value),
  })),
  ...laptopBrands.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other (Desktop)" : v.label,
    value: normalize(v.value, laptopBrands[1].value),
  })),
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
