import { SumItems } from '@mahdion/utils/function';
import { createContext, useReducer } from 'react';
const initialstate = {
    selecteditems: [],
    itemscounter: 0,
    total: 0,
    checkout: false

}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD-ITEMS":
            if (!state.selectitems?.find(item => item.id === action.payload.id)) {
                state.selecteditems.push({ ...action.payload, quantity: 1 })
            } return {
                selecteditems: [...state.selecteditems],
                ...SumItems(state.selecteditems),
                checkout: false
            }
        case "REMOVE-ITEM":
            const NewSelecteditems = state.selecteditems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selecteditems: [...NewSelecteditems],
                ...SumItems(NewSelecteditems),
            }
        case "INCREASE":
            const addindex = state.selecteditems.findIndex(item => item.id === action.payload.id)
            state.selecteditems[addindex].quantity++
            return {
                ...state,
                ...SumItems(state.selecteditems),
            }
        case "Decrease":
            const decreaseindex = state.selecteditems.findIndex(item => item.id === action.payload.id)
            state.selecteditems[decreaseindex].quantity--
            return {
                ...state,
                ...SumItems(state.selecteditems),
            }
        case "CHECKOUT":
            return {
                selecteditems: [],
                itemscounter: 0,
                total: 0,
                checkout: true
            }

        default:
            break;
    }

}
export const CartProvider = createContext()
const CartContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <CartProvider.Provider value={{ state, dispatch }}>
            {children}
        </CartProvider.Provider>
    );
};

export default CartContext;