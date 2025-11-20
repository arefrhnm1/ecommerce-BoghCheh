"use client";
import React, { useContext } from "react";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

interface IAddToCartProps {
	id: string;
}

export default function AddToCart({ id }: IAddToCartProps) {
	const {
		cartItems,
		handleIncreaseProductQty,
		getProductQty,
		handleDecreaseProductQty,
		handleRemoveProduct
	} = useShoppingCartContext();

	return (
		<div>
			<div className="w-fit flex gap-5">
				<button
					onClick={() => handleIncreaseProductQty(parseInt(id))}
					className="bg-green-200 px-4 py-2 rounded-xl"
				>
					+
				</button>
				<span className="px-4 py-2">{getProductQty(parseInt(id))}</span>
				<button
					onClick={() => handleDecreaseProductQty(parseInt(id))}
					className="bg-rose-200 px-4 py-2 rounded-xl"
				>
					-
				</button>
			</div>
			<button onClick={() => handleRemoveProduct(parseInt(id))} className="bg-rose-700 text-white px-4 py-2 rounded-xl mt-2">delete</button>
		</div>
	);
}
