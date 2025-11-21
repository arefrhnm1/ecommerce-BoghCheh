"use client";

import { useState } from "react";
import Container from "../../components/Container";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";
export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// axios({
		//     url: '/login',
		//     method: 'POST',
		//     data:{
		//         username: username,
		//         password: Password
		//     }
		// })

		const response = {
			token: "djfhfuifhdfdhhaifhaofoda",
			expire: 7,
		};


        Cookie.set("token", response.token, {expires: response.expire})
        redirect('/dashboard')
	};

	return (
		<Container>
			<div className="border p-4 gap-5 mt-20 flex flex-col bg-sky-100 w-72 mx-auto">
				<input
					onChange={(e) => setUsername(e.target.value)}
					placeholder="username"
					className="p-4 bg-white"
					type="text"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password"
					className="p-4 bg-white"
					type="password"
				/>

				<button
					onClick={handleLogin}
					className="p-2 bg-sky-700 text-white"
				>
					Sumbit
				</button>
			</div>
		</Container>
	);
}
