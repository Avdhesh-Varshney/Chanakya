import React, { useState ,useContext} from 'react';
import axios from 'axios';
import '../../css/Auth.css';
import { FaGithub, FaGoogle, FaXTwitter, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Context } from "../../context/Context";

const URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`;

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
  const { isDarkMode } = useContext(Context);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(URL, { email, password });
			if (response.data.success) {
				setSuccess('Login successful!');
				localStorage.setItem('authToken', response.data.authtoken);
				window.location.href = '/';
			}
		} catch (error) {
			setError(error.response?.data?.error || 'Something went wrong!');
		}
	};

	return (
		<div className="form-container mb-4" style={{ backgroundColor: isDarkMode ? "#111827" : "#A2CA71" }}>
			<p className="title">Login</p>

			<form className="form" onSubmit={handleSubmit}>
				{error && <p className="error">{error}</p>}
				{success && <p className="success">{success}</p>}
				<div className="input-group">
					<label htmlFor="email" style={{ color: isDarkMode ? "#9ca3af" : "#185519" }}>Email</label>
					<input type="email" name="email" id="email" placeholder="Enter you email" autoComplete='off' style={{ backgroundColor: isDarkMode ? "#111827" : "#F6FCDF" , color: isDarkMode ? "#F3F4F6" : "#111827" ,borderColor:isDarkMode?"":""}}
						value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>

				<div className="input-group">
					<label htmlFor="password" style={{ color: isDarkMode ? "#9ca3af" : "#185519" }}>Password</label>
					<div className="password-container">
						<input type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder="Enter you password" style={{ backgroundColor: isDarkMode ? "#111827" : "#F6FCDF" }}
							value={password} onChange={(e) => setPassword(e.target.value)} required />
						<button
							type="button"
							className="password-toggle"
							onClick={togglePasswordVisibility}
						>
							{passwordVisible ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>

					<div className="forgot">
						<a rel="noopener noreferrer" href="#">Forgot Password?</a>
					</div>
				</div>

				<button type="submit" className="sign" style={{ backgroundColor: isDarkMode ? "#A78BFA" : "#F6E96B" }}>Sign in</button>
			</form>

			<div className="social-message">
				<div className="line"></div>
				<p className="message" style={{ color: isDarkMode ? "#9ca3af" : "#185519" }}>Login with social accounts</p>
				<div className="line"></div>
			</div>

			<div className="social-icons">
				<button aria-label="Log in with Google" className="icon"><FaGoogle /></button>
				<button aria-label="Log in with Twitter" className="icon"><FaXTwitter /></button>
				<button aria-label="Log in with GitHub" className="icon"><FaGithub /></button>
			</div>

			<p className="signup" style={{ color: isDarkMode ? "#9ca3af" : "#185519" }}>Don't have an account?
				<a rel="noopener noreferrer" href="/auth/signup"> Sign up</a>
			</p>
		</div>
	);
};

export default Login;
