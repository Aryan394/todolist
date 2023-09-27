import React, { useState } from "react";
import "./Login.css";
function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = () => {
		console.log("Username:", username);
		console.log("Email:", email);
		console.log("Password:", password);
	};

	return (
		<div>
			<h2>Register</h2>
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
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
				<button type="button" onClick={handleRegister}>
					Register
				</button>
			</form>
		</div>
	);
}

export default Register;
