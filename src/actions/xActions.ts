// actions.ts
import dispatcher from "../dispatcher/xDispatcher";


export const createProduct = () => {
  dispatcher.dispatch({
    type: "CREATE_PRODUCT",
  });
};

export const editProduct = (index: number) => {
  dispatcher.dispatch({
    type: "EDIT_PRODUCT",
    payload: index,
  });
};

export const deleteProduct = (index: number) => {
  dispatcher.dispatch({
    type: "DELETE_PRODUCT",
    payload: index,
  });
};
