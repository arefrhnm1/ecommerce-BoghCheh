"use client";

import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import CartItem from "../../components/CartItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import axios from "axios";
import { IProductItemProps } from "../../components/ProductItem";
import Product from "../store/[id]/page";
import { formatNumberWithCommas } from "../../utils/number";


interface IDiscountData{
	id: number;
	code: string,
	percentage: number;

}




export default function cart() {
	const { cartItems } = useShoppingCartContext();
	const [discountCode, setDiscountCode] = useState("");
	const [finalPrice, setFinalPrice] = useState(0)
	const [discountedPrice, setDiscountedPrice] = useState(0)

	// fetching//
	const [data, setData] = useState<IProductItemProps[]>([]);

	useEffect(() => {
		axios(`http://localhost:3001/products`).then((results) => {
			const { data } = results;

			setData(data);
		});
	}, []);

	// total price
	let totalPrice = cartItems.reduce((total, item) => {
		let selelctedProduct = data.find((p) => p.id == item.id.toString());

		return total + (selelctedProduct?.price || 0) * item.qty;
	}, 0);

	// handle submit discount//
	const handleSubmitDiscount = () => {
		axios(`http://localhost:3001/discounts?code=${discountCode}`).then(
			(result) => {
				const data = result.data as IDiscountData[]

				let discountedPrice = totalPrice * data[0].percentage / 100;
				let finalPrice = totalPrice - discountedPrice
				setFinalPrice(finalPrice)
				setDiscountedPrice(discountedPrice)

			}
		);
	};

	return (
		<Container>
			<h1 className="py-10">Cart</h1>
			<div className="">
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<div className="border shadow-md p-4 grid gap-3">
				<h3>{formatNumberWithCommas(totalPrice)}$</h3>
				<h3>Takhfif: {formatNumberWithCommas(discountedPrice)}$</h3>
				<h3>final price: {formatNumberWithCommas(finalPrice)}$</h3>
				<div>
					<input
						className="border px-4 py-2 mr-2"
						placeholder="code Takhfif"
						type="text"
						onChange={(e) => setDiscountCode(e.target.value)}
					/>
					<button
						onClick={handleSubmitDiscount}
						className="bg-slate-200 border rounded-lg px-4 py-2"
					>
						Takhfif
					</button>
				</div>
			</div>
		</Container>
	);
}
