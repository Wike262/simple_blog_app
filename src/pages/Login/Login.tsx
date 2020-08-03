import React, { FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormWrapper, Form, Input, Title, Button, Error } from './LoginStyles';
import { User } from '../../types';
import * as constants from '../constants';

interface Props {
	user: User;
	login: (email: string, password: string) => void;
}

const Login = ({ user, login }: Props) => {
	const [active, setUnActive] = React.useState(true);
	if (user?.token) return <Redirect to="/" />;

	const handlerChange = () => {
		if (
			!!(document.getElementById(constants.LOGIN_EMAIL) as HTMLInputElement).value &&
			!!(document.getElementById(constants.LOGIN_PASSWORD) as HTMLInputElement).value
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
				<Input
					id={constants.LOGIN_EMAIL}
					onChange={handlerChange}
					autoComplete="email"
					type="email"
					placeholder="Email"
					required
				/>
				<Input
					id={constants.LOGIN_PASSWORD}
					onChange={handlerChange}
					autoComplete="current-password"
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
