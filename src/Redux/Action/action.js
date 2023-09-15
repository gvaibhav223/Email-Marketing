import { add_to_cart, remove_to_cart } from "../constants";

export const addtocart = (data) => {
  console.log("action", data);
  return {
    type: add_to_cart,
    data: data,
  };
};

export const removetocart = (data) => {
  return {
    type: remove_to_cart,
    data: data,
  };
};
