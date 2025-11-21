"use client";

import { ChangeEvent, useState } from "react";
import Container from "../../components/Container";
import axios from "axios";

function Dashboard() {
	const [newProduct, setNewProduct] = useState({
		title: "",
		price: "",
		image: "",
		description: "",
	});

	const handleChangeProduct = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, name } = e.target;

		setNewProduct({
			...newProduct,
			[name]: value,
		});
	};

	const handleCreateProduct = () => {
		axios({
			method: "POST",
			url: "http://localhost:3001/products",
			data: {
				id: Math.floor(Math.random() * 1000).toString(),
				image: newProduct.image,
				title: newProduct.title,
				description: newProduct.description,
				price: newProduct.price,
			},
		});
	};

	return (
		<Container>
			<div className="grid grid-cols-3 gap-5 mt-20">
				<input
					onChange={handleChangeProduct}
					className="bg-sky-200 p-4 rounded"
					type="text"
					placeholder="title"
					name="title"
				/>
				<input
					onChange={handleChangeProduct}
					className="bg-sky-200 p-4 rounded"
					type="text"
					placeholder="price"
					name="price"
				/>
				<input
					onChange={handleChangeProduct}
					className="bg-sky-200 p-4 rounded"
					type="text"
					placeholder="image"
					name="image"
				/>
			</div>
			<textarea
				onChange={handleChangeProduct}
				placeholder="description"
				className="w-full bg-sky-200 mt-10 p-4 rounded"
				name="description"
			></textarea>
			<button
				onClick={handleCreateProduct}
				className="bg-sky-900 text-white rounded p-4"
			>
				Make new item
			</button>
		</Container>
	);
}

export default Dashboard;
