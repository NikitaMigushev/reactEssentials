import {createContext, useEffect, useReducer} from "react";

const FirstCartContext = createContext({
    orders: [],
    showItem: () => {}
});

function cartReducer(state, action) {
    if (action.type === 'SHOW_ITEM') {
        console.log(state.orders)
    }

    return state;
}

export function SecondCartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {orders: []})

    function showItem(item) {
        dispatchCartAction({type: 'SHOW_ITEM', item})

    }

    const cartContext = {
        orders: cart.orders,
        showItem,
    };

    return <FirstCartContext.Provider value={cartContext}>{children}</FirstCartContext.Provider>;
}

export default FirstCartContext;