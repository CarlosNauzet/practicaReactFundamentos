import { client } from "../../api/client.js";

export const getTags = async () => {
  const tags = await client.get("/api/v1/adverts/tags");
  return tags;
};

export const createAdvert = async (formData) => {
  const sale = formData.get("sale");
  const forSale = sale === "onSale" ? true : false;
  formData.set("sale", forSale);
  const advert = await client.post("/api/v1/adverts", formData);
  return advert;
};
