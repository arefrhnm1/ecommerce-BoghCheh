import React from "react";

function CartItem() {
	return (
		<div className="grid grid-cols-12 bg-slate-100 mb-4">
			<img
				className="col-span-3"
				src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
			/>
			<div className="col-span-9 p-10">
				<h2>name</h2>
				<p>count 3</p>
				<p>price: 39$</p>
			</div>
		</div>
	);
}

export default CartItem;
