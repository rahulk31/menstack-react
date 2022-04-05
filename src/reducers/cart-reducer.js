const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const res = state.itemsInCart.filter(
        (item) => item.id === action.payload.id
      );

      return res.length === 0
        ? {
            ...state,
            totalInCartQuantity: state.totalInCartQuantity + 1,
            totalPrice: state.totalPrice + Number(action.payload.price),
            itemsInCart: [
              ...state.itemsInCart,
              { ...action.payload, quantity: 1 },
            ],
          }
        : {
            ...state,
            totalPrice: state.totalPrice + Number(action.payload.price),
            itemsInCart: [
              ...state.itemsInCart.map((item) => {
                if (item.id === action.payload.id) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  return { ...item };
                }
              }),
            ],
          };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        totalPrice: state.totalPrice + Number(action.payload.price),
        itemsInCart: [
          ...state.itemsInCart.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return { ...item };
            }
          }),
        ],
      };

    case "DECREASE_QUANTITY":
      if (action.payload.quantity === 1) {
        return {
          ...state,
          totalPrice:
            state.totalPrice -
            Number(action.payload.price) *
              Number(
                state.itemsInCart.filter(
                  (item) => item.id === action.payload.id
                )[0].quantity
              ),
          totalInCartQuantity: state.totalInCartQuantity - 1,
          itemsInCart: [
            ...state.itemsInCart.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
        };
      }
      return {
        ...state,
        totalPrice: state.totalPrice - Number(action.payload.price),
        itemsInCart: [
          ...state.itemsInCart.map((item) => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return { ...item };
            }
          }),
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        totalPrice:
          state.totalPrice -
          Number(action.payload.price) *
            Number(
              state.itemsInCart.filter(
                (item) => item.id === action.payload.id
              )[0].quantity
            ),
        totalInCartQuantity: state.totalInCartQuantity - 1,
        itemsInCart: [
          ...state.itemsInCart.filter((item) => item.id !== action.payload.id),
        ],
      };

    default:
      break;
  }
};

export { cartReducer };
