import React from "react";
import Container from "../../components/Container";
import ProductItem, { IProductItemProps } from "../../components/ProductItem";
import Link from "next/link";

export default async function Store() {

	const result = await fetch("http://localhost:3001/products")
	const data = await result.json() as IProductItemProps[]

	return (
		<Container>
			<div className="grid grid-cols-4 gap-4 py-4">
				{data.map((i) => (
					<Link key={i.id} href={`/store/${i.id}`}>
						<ProductItem {...i} />
					</Link>
				))}
			</div>
		</Container>
	);
}
