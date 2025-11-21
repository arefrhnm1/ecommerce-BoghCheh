"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { title } from "process";
import Cookies from "js-cookie";

export default function Navbar() {
	const pathname = usePathname();
	const { cartTotalQty } = useShoppingCartContext();

	const navLinks = [
		{ href: "/", title: "Home" },
		{ href: "/store", title: "Store" },
		{
			href: "/dashboard",
			title: "dashboard",
		},
		{
			href: "/login",
			title: "login",
		},
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
					<Link href="/cart">Cart</Link>
					<span className="bg-rose-900 ml-2 px-3 py-1 text-rose-100 rounded-xl">
						{cartTotalQty}
					</span>
					<button
					className="text-white bg-rose-900 rounded px-4 py-2 ml-5"
						onClick={() => {
							Cookies.remove("token");
							redirect("/");
						}}
					>
						logout
					</button>
				</div>
			</nav>
		</Container>
	);
}
