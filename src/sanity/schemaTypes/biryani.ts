import { title } from "process";

export const biryani = {
  name: "biryani",
  title: "biryani",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Biryani title",
      type: "string",
    },
    {
      name: "description",
      title: "Biryani description",
      type: "string",
    },
    {
      name: "price",
      title: "Biryani price",
      type: "number",
    },
    {
      name: "image",
      title: "Biryani image",
      type: "image",
    },
  ],
};

export default biryani;
