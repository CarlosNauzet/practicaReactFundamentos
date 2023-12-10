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

export const getAdverts = async () => {
  const adverts = await client.get("/api/v1/adverts");
  return adverts;
};

export const getAdvert = async (id) => {
  const advert = await client.get(`/api/v1/adverts/${id}`);
  return advert;
};

export const deleteAdvert = async (id) => {
  console.log({ id });
  const advert = await client.delete(`/api/v1/adverts/${id}`);
  return advert;
};
