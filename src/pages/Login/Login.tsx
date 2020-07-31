import React, { FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormWrapper, Form, Input, Title, Button, Error } from './LoginStyles';
import { User } from '../../types';

interface Props {
	login: Function;
	user: User;
}

const Login = ({ login, user }: Props) => {
	const [active, setUnActive] = React.useState(true);
	console.log(login, user.error);
	if (user?.token) return <Redirect to="/" />;

	const handlerChande = () => {
		if (
			!!(document.getElementById('Login__Email') as HTMLInputElement).value &&
			!!(document.getElementById('Login__Password') as HTMLInputElement).value
		)
			setUnActive(false);
		else setUnActive(true);
	};

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = (document.getElementById('Login__Email') as HTMLInputElement).value;
		const password = (document.getElementById('Login__Password') as HTMLInputElement).value;
		if (email) login(email, password);
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleLogin}>
				<Title>
					<h2>Sign in</h2>
					<Link to="/register">Need an account?</Link>
				</Title>
				<Error>{user?.error ? `Email or password: ${Object.values(user.error)[0]}` : ''}</Error>
				<Input onChange={handlerChande} autoComplete="email" id="Login__Email" type="email" placeholder="Email" required />
				<Input
					onChange={handlerChande}
					autoComplete="current-password"
					id="Login__Password"
					type="password"
					placeholder="Password"
					required
				/>
				<Button type="submit" disabled={active}>
					Sign in
				</Button>
			</Form>
		</FormWrapper>
	);
};

export default Login;
