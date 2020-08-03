import React, { FormEvent } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FormWrapper, Form, Input, Title, Button } from './RegisterStyles';
import { User } from '../../types';
import * as constants from '../constants';

interface Props {
	register: (username: string, email: string, password: string) => void;
	user: User;
}

const Register = ({ register, user }: Props) => {
	const [active, setUnActive] = React.useState(true);

	if (user?.token) return <Redirect to="/" />;

	const handlerChange = () => {
		if (
			!!(document.getElementById(constants.REGISTER_USERNAME) as HTMLInputElement).value &&
			!!(document.getElementById(constants.REGISTER_EMAIL) as HTMLInputElement).value &&
			!!(document.getElementById(constants.REGISTER_PASSWORD) as HTMLInputElement).value
		)
			setUnActive(false);
		else setUnActive(true);
	};

	const handleLogin = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const username = (document.getElementById(constants.REGISTER_USERNAME) as HTMLInputElement).value;
		const email = (document.getElementById(constants.REGISTER_EMAIL) as HTMLInputElement).value;
		const password = (document.getElementById(constants.REGISTER_PASSWORD) as HTMLInputElement).value;
		register(username, email, password);
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleLogin}>
				<Title>
					<h2>Sign up</h2>
					<Link to="/login">Have an account?</Link>
				</Title>
				<Input id={constants.REGISTER_USERNAME} onChange={handlerChange} type="text" placeholder="Username" required />
				<Input
					id={constants.REGISTER_EMAIL}
					onChange={handlerChange}
					autoComplete="email"
					type="email"
					placeholder="Email"
					required
				/>
				<Input
					id={constants.REGISTER_PASSWORD}
					onChange={handlerChange}
					autoComplete="new-password"
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
