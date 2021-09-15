import data from "~/data/livres.json";

export const state = () => ({
  cartUIStatus: "idle",
  storedata: data,
});