"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

export default function Navbar() {
	const pathname = usePathname();
	const {cartTotalQty} = useShoppingCartContext()

	const navLinks = [
		{ href: "/", title: "Home" },
		{ href: "/store", title: "Store" },
	];

	return (
		<Container>
			<nav className="shadow p-4 flex justify-between">
				<div>
					{navLinks.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={`mr-4  ${
							pathname === item.href ? "text-sky-500" : ""
						}`}
					>
						{item.title}
					</Link>
				))}
				</div>
				
				<div>
					<Link href='/cart'>Cart</Link>
					<span className="bg-rose-900 ml-2 px-3 py-1 text-rose-100 rounded-xl">{cartTotalQty}</span>
				</div>
			</nav>
		</Container>
	);
}
