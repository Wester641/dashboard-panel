export const addFormFields = [
  {
    label: "Title* (Text)",
    name: "title",
    required: true,
    defaultValue: "MacBook Air M3",
  },
  {
    label: "Price* (Number)",
    name: "price",
    required: true,
    type: "number",
    defaultValue: "1200",
  },
  {
    label: "Old Price (Number)",
    name: "old_price",
    required: false,
    type: "number",
    defaultValue: "",
  },
  {
    label: "SKU* (Number)",
    name: "sku",
    type: "number",
    required: true,
    // defaultValue: "123456",
  },
  {
    label: "Total Stock (Number)",
    name: "total_stock",
    required: false,
    type: "number",
    defaultValue: "",
  },
  // {
  //   label: "Images (comma separated)",
  //   name: "image_url",
  //   required: false,
  //   defaultValue: "",
  // },
  {
    label: "Description (Text)",
    name: "description",
    required: false,
    defaultValue: "",
    multiline: true,
  },
];

export const time = new Date().getTime();
