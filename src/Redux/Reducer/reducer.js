import { add_to_cart, remove_to_cart } from "../constants";

const initialstates = {
  card_data: [],
};
export default function cardItems(state = [], actions) {
  switch (actions.type) {
    case add_to_cart:
      return [...state, { cartlist: actions.data }];
      break;
    case remove_to_cart:
      state.pop();
      return [...state];
      break;
    default:
      return state;
  }
}
