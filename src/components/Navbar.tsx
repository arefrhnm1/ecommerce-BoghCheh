"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

export default function Navbar() {
	const pathname = usePathname();

	const navLinks = [
		{ href: "/", title: "Home" },
		{ href: "/store", title: "Store" },
	];

	return (
		<Container>
			<nav className="shadow p-4 ">
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
			</nav>
		</Container>
	);
}
