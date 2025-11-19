import React from "react";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";

export default function Store() {
	const data = [
		{
			id: "1",
			image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
			title: "Aftab parast",
			description: "a animal with big eye and eat hashare",
			price: 23,
		},
		{
			id: "2",
			image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
			title: "Aftab parast2",
			description: "a animal with big eye and eat hashare",
			price: 89,
		},
		{
			id: "3",
			image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
			title: "Aftab parast3",
			description: "a animal with big eye and eat hashare",
			price: 13,
		},
		{
			id: "4",
			image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg",
			title: "Aftab parast4",
			description: "a animal with big eye and eat hashare",
			price: 84,
		},
	];

	return (
		<Container>
			<div className="grid grid-cols-4 gap-4 py-4">
				{data.map((i) => (
					<ProductItem key={i.id} {...i}/>
				))}
			</div>
		</Container>
	);
}
