import { actionTypes } from "../types/types";

// Funciones - acciones - Agregar producto.
export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

// Eliminar producto.
export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

// Ajustar la cantidad del producto.
export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.QUANTITY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}
