import React from "react";
import Container from "../../../components/Container";
import { IProductItemProps } from "../../../components/ProductItem";
import AddToCart from "../../../components/AddToCart";

interface IProductProps {
	params: Promise<{ id: string }>;
	searchParams: Promise<{}>;
}

export default async function Product({ params }: IProductProps) {
	const { id } = await params;

	const result = await fetch(`http://localhost:3001/products/${id}`);
	const data = (await result.json()) as IProductItemProps;
	return (
		<Container>
			<div className="grid grid-cols-12 gap-10">
				<div className="col-span-3">
					<img src={data.image} />
				</div>
				<div className="col-span-9">
					<h2>{data.title}</h2>
					<h4>{data.description}</h4>
					<span>{data.price}$</span>
					<AddToCart/>
				</div>
			</div>
		</Container>
	);
}
