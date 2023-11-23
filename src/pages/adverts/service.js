import { client } from "../../api/client.js";

export const getTags = async () => {
  const tags = await client.get("/api/v1/adverts/tags");
  return tags;
};
