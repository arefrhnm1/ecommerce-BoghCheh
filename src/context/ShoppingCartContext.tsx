"use client";

import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
	children: React.ReactNode;
};

type CartItems = {
	id: number;
	qty: number;
};

type TShoppingCartContext ={
    cartItems: CartItems[]
}

const ShoppingCartContext = createContext({} as TShoppingCartContext);



export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}







export function ShoppingCartContextProvider({
	children,
}: ShoppingCartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItems[]>([]);

	return (
		<ShoppingCartContext.Provider value={{ cartItems }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
