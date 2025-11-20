"use client";

import { createContext, useContext, useState } from "react";
import Product from "../app/store/[id]/page";

type ShoppingCartContextProviderProps = {
	children: React.ReactNode;
};

type CartItems = {
	id: number;
	qty: number;
};

type TShoppingCartContext = {
	cartItems: CartItems[];
	handleIncreaseProductQty: (id: number) => void;
	getProductQty: (id: number) => number;
	cartTotalQty: number;
	handleDecreaseProductQty: (id: number) => void;
	handleRemoveProduct: (id: number) => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
	return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
	children,
}: ShoppingCartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItems[]>([]);
	// cart total qty
	const cartTotalQty = cartItems.reduce((totalQty, item) => {
		return totalQty + item.qty;
	}, 0);

	// handle Product Qty//
	const getProductQty = (id: number) => {
		return cartItems.find((item) => item.id == id)?.qty || 0;
	};

	// handle increase Product//
	const handleIncreaseProductQty = (id: number) => {
		setCartItems((currentItems) => {
			let isNotProductExist =
				currentItems.find((item) => item.id == id) == null;
			if (isNotProductExist) {
				return [...currentItems, { id: id, qty: 1 }];
			} else {
				return currentItems.map((item) => {
					if (item.id == id) {
						return {
							...item,
							qty: item.qty + 1,
						};
					} else {
						return item;
					}
				});
			}
		});
	};

	// handle decrease Product//
	const handleDecreaseProductQty = (id: number) => {
		setCartItems((currentItems) => {
			let isLastOne =
				currentItems.find((item) => item.id === id)?.qty == 1;

			if (isLastOne) {
				return currentItems.filter((item) => item.id != id);
			} else {
				return currentItems.map((item) => {
					if (item.id == id) {
						return {
							...item,
							qty: item.qty - 1,
						};
					} else {
						return item;
					}
				});
			}
		});
	};

	// remove product//
	const handleRemoveProduct = (id: number) => {
		setCartItems((currentitems) => {
			return currentitems.filter((item) => item.id != id);
		});
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				cartItems,
				handleIncreaseProductQty,
				getProductQty,
				cartTotalQty,
				handleDecreaseProductQty,
				handleRemoveProduct,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
