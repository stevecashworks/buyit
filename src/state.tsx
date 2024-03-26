import React, { createContext, useReducer } from "react";
import wristwatch from "./assets/wristwatch.png";

interface cart {
  name: string;
  id: number;
  quantity: number;
  image: string;
  price: number;
}
interface stateType {
  fetchedCart: cart[];
  editedCart: cart[];
}

type actionType =
  | {
      type: "changeQuantity";
      payload: { quantity: number; id: number };
    }
  | {
      type: "removeProduct";
      payload: { id: number };
    };

const reducer = (state: stateType, action: actionType): stateType => {
  const { type, payload } = action;
  console.log(action);
  const { id } = payload;
  switch (type) {
    case "changeQuantity":
      return {
        ...state,
        editedCart: state.editedCart.map((prod) => {
          console.log(`prodId: ${prod.id}, payloadId:${id}`);
          return prod.id === id
            ? { ...prod, quantity: payload.quantity }
            : prod;
        }),
      };
      break;

    case "removeProduct":
      return {
        ...state,
        editedCart: state.editedCart.filter((prod) => prod.id !== id),
      };
      break;

    default:
      return state;
  }
};
type initialStateType = {
  fetchedCart: cart[];
  editedCart: cart[];
};

const newSampleCart = [
  {
    image: wristwatch,
    name: "sleek wristwatch",
    price: 50,
    id: 14,
    quantity: 1,
  },
  {
    image: wristwatch,
    name: "sleek wristwatch",
    price: 50,
    id: 13,
    quantity: 1,
  },
  {
    image: wristwatch,
    name: "sleek wristwatch",
    price: 50,
    id: 12,
    quantity: 1,
  },
];
const initialState: initialStateType = {
  fetchedCart: newSampleCart,
  editedCart: newSampleCart,
};
export const CartContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({ state: initialState, dispatch: () => undefined });
const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default AppWrapper;
