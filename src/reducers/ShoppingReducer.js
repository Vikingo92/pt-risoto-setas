import { actionTypes } from "../types/types";

const initialState = {
    ingredients: [
        {   "id":1,
            "product": "Margarina de maíz",
            "brand": "Artua",
            "items": 1,
            "quantity": "600 gr.",
            "price": 2.95
        },
        {
            "id":2,
            "product": "Arroz de Valencia",
            "brand": "De Nuestra Tierra",
            "items": 1,
            "quantity": "1 kg.",
            "price": 2.4
        },
        {
            "id":3,
            "product": "Caldo de verduras natural",
            "brand": "Aneto",
            "items": 1,
            "quantity": "1 l.",
            "price": 3.6
        },
        {
            "id":4,
            "product": "Seta Shiitake ecológica",
            "items": 1,
            "quantity": "200 gr.",
            "price": 3.55
        },
        {
            "id":5,
            "product": "Paragoce, vino blanco",
            "brand": "Verdejo D.O. Rueda",
            "items": 1,
            "quantity": "0,57 cl.",
            "price": 5.85
        },
        {
            "id":6,
            "product": "Ajo",
            "items": 1,
            "quantity": "270 gr.",
            "price": 1.49
        },
        {
            "id":7,
            "product": "Cebolla chalotas",
            "items": 1,
            "quantity": "200 gr.",
            "price": 2.99
        }
    ],
    cart: [],
}

const ShoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Obtener los items del array
            const item = state.ingredients.find(i => i.id === action.payload.id)
            // Validar si los items ya se agregaron al carrito
            const inCart = state.cart.find(item =>
                item.id === action.payload.id ? true : false)

            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item)
                    : [...state.cart, { ...item, qty: 1 }]

            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        case actionTypes.QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, qty: + action.payload.qty }
                        : item
                )
            }

        default:
            return state
    }
}

export default ShoppingReducer