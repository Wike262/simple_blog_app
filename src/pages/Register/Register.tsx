import React, { FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormWrapper, Form, Input, Title, Button } from './RegisterStyles';
import { User } from '../../types';

interface Props {
	register: Function;
	user: User;
}

const Register = ({ register, user }: Props) => {
	const [active, setUnActive] = React.useState(true);

	if (user?.token) return <Redirect to="/" />;

	const handlerChande = () => {
		if (
			!!(document.getElementById('Login__Username') as HTMLInputElement).value &&
			!!(document.getElementById('Login__Email') as HTMLInputElement).value &&
			!!(document.getElementById('Login__Password') as HTMLInputElement).value
		)
			setUnActive(false);
		else setUnActive(true);
	};

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const username = (document.getElementById('Login__Username') as HTMLInputElement).value;
		const email = (document.getElementById('Login__Email') as HTMLInputElement).value;
		const password = (document.getElementById('Login__Password') as HTMLInputElement).value;
		register(username, email, password);
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleLogin}>
				<Title>
					<h2>Sign up</h2>
					<Link to="/login">Have an account?</Link>
				</Title>
				<Input onChange={handlerChande} id="Login__Username" type="text" placeholder="Username" required />
				<Input onChange={handlerChande} autoComplete="email" id="Login__Email" type="email" placeholder="Email" required />
				<Input
					onChange={handlerChande}
					autoComplete="new-password"
					id="Login__Password"
					type="password"
					placeholder="Password"
					required
				/>
				<Button type="submit" disabled={active}>
					Sign up
				</Button>
			</Form>
		</FormWrapper>
	);
};

export default Register;
