"use client";

import React from "react";
import Container from "../../components/Container";
import CartItem from "../../components/CartItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export default function cart() {
	const { cartItems } = useShoppingCartContext();

	return (
		<Container>
			<h1 className="py-10">Cart</h1>
			<div className="">
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<div className="border shadow-md p-4 grid gap-3">
				<h3>total price: 384</h3>
				<h3>Takhfif: 10%</h3>
				<h3>final price: 350</h3>
				<div>
					<input
						className="border px-4 py-2 mr-2"
						placeholder="code Takhfif"
						type="text"
					/>
					<button className="bg-slate-200 border rounded-lg px-4 py-2">
						Takhfif
					</button>
				</div>
			</div>
		</Container>
	);
}
