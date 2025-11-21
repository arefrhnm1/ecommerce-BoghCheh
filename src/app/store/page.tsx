import React from "react";
import Container from "../../components/Container";
import ProductItem, {
	IProductItemProps,
	IProductList,
} from "../../components/ProductItem";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";

interface IStoreProps {
	params: Promise<{}>;
	searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

export default async function Store({ searchParams }: IStoreProps) {
	const page = (await searchParams).page ?? "1";
	const per_page = (await searchParams).per_page ?? "5";
	const title = (await searchParams).title ?? ''

	const result = await fetch(
		`http://localhost:3001/products?_page=${page}&_per_page=${per_page}&title=${title}`
	);
	const data = (await result.json()) as IProductList;

	return (
		<Container>
			<Search/>
			<div className="grid grid-cols-4 gap-4 py-4">
				{data.data.map((i) => (
					<Link key={i.id} href={`/store/${i.id}`}>
						<ProductItem {...i} />
					</Link>
				))}
			</div>
			<Pagination pageCount={data.pages} />
		</Container>
	);
}
