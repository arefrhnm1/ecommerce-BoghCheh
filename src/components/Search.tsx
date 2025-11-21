"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [search, setSearch] = useState("");
	const handleSearch = () => {
		const currentSearchParams = new URLSearchParams(
			searchParams.toString()
		);

		currentSearchParams.set("title", search);
		router.push(`/store?${currentSearchParams.toString()}`);
	};

	return (
		<div>
			<input
				onChange={(e) => setSearch(e.target.value)}
				type="text"
				placeholder="Search"
			/>
			<button onClick={handleSearch}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-search-icon lucide-search"
				>
					<path d="m21 21-4.34-4.34" />
					<circle cx="11" cy="11" r="8" />
				</svg>
			</button>
		</div>
	);
}
