import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";

interface ICartItemProps {
	id: number;
	qty: number;
}

function CartItem({ id, qty }: ICartItemProps) {
	const [data, setData] = useState({} as IProductItemProps);

	useEffect(() => {
		axios(`http://localhost:3001/products/${id}`).then((results) => {
			const { data } = results;

			setData(data);
		});
	}, []);

	return (
		<div className="grid grid-cols-12 bg-slate-100 mb-4">
			<img
				className="col-span-3"
				src={data.image}
			/>
			<div className="col-span-9 p-10">
				<h2>{data.title}</h2>
				<p>{data.description}</p>
				<p>{qty}</p>
				<p>price: {data.price}$</p>
			</div>
			<AddToCart id={id.toString()}/>
		</div>
	);
}

export default CartItem;
