// src/Login.js

import React, { useState } from "react";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Here, you can implement your authentication logic.
		// For this example, we'll just log the entered username and password.
		console.log("Username:", username);
		console.log("Password:", password);
	};

	return (
		<div>
			<h2>Login</h2>
			<form>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="button" onClick={handleLogin}>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
