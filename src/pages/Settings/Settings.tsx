import React, { FormEvent } from 'react';
import { Redirect } from 'react-router-dom';
import { FormWrapper, Form, Input, TextArea, Title, Button, ButtonOut } from './SettingsStyles';
import { User } from '../../types';
import { useHistory } from 'react-router-dom';

interface Props {
	user: User;
	update: Function;
}

const Settings = ({ user, update }: Props) => {
	const history = useHistory();
	if (!user.token) return <Redirect to="/login" />;
	const image = (document.getElementById('Settings__URL') as HTMLInputElement)?.value;
	const username = (document.getElementById('Settings__Username') as HTMLInputElement)?.value;
	const bio = (document.getElementById('Settings__Bio') as HTMLInputElement)?.value;
	const email = (document.getElementById('Settings__Email') as HTMLInputElement)?.value;
	const password = (document.getElementById('Settings__Password') as HTMLInputElement)?.value;

	const updatedUser = { image, username, bio, email, password };

	if (user.username === updatedUser.username) return <Redirect to={`/profile/${updatedUser.username}`} />;
	const handleUpdateUser = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		update(updatedUser, user.token);
	};

	const handleSingOut = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		console.log(123);
		document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		console.log(document.cookie);
		history.go(0);
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleUpdateUser}>
				<Title>
					<h2>Your Settings</h2>
				</Title>
				<Input id="Settings__URL" type="text" placeholder="URL of profile picture" defaultValue={user.image} />
				<Input id="Settings__Username" type="text" placeholder="Username" required defaultValue={user.username} />
				<TextArea id="Settings__Bio" placeholder="Short bio about you" defaultValue={user.bio} />
				<Input id="Settings__Email" type="email" placeholder="Email" defaultValue={user.email} />
				<Input id="Settings__Password" type="password" placeholder="Password" />
				<Button type="submit">Update settings</Button>
				<ButtonOut onClick={handleSingOut}>Sing out</ButtonOut>
			</Form>
		</FormWrapper>
	);
};

export default Settings;
