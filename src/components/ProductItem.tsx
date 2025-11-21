export interface IProductItemProps {
	id: string;
	image: string;
	title: string;
	description: string;
	price: number;
}

export interface IProductList {
	first: number | null;
	items: number | null;
	last: number | null;
	next: number | null;
	pages: number;
	prev: number | null;
	data: IProductItemProps[];
}

export default function ProductItem({
	image,
	title,
	price,
}: IProductItemProps) {
	return (
		<div className="shadow-md">
			<img src={image} alt="" />
			<div className="p-2 ">
				<h3 className="font-bold">{title}</h3>
				<span>{`price: ${price}$`}</span>
			</div>
		</div>
	);
}
