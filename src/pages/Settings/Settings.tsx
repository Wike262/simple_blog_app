import React, { FormEvent } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { FormWrapper, Form, Input, TextArea, Title, Button, ButtonOut } from './SettingsStyles';
import { User } from '../../types';
import * as constants from '../constants';

interface Props {
	user: User;
	update: (updatedUser: User, token: string) => void;
}

const Settings = ({ user, update }: Props) => {
	const history = useHistory();
	if (!user.token) return <Redirect to="/login" />;
	const image = (document.getElementById(constants.SETTINGS_IMAGE_URL) as HTMLInputElement)?.value;
	const username = (document.getElementById(constants.SETTINGS_USERNAME) as HTMLInputElement)?.value;
	const bio = (document.getElementById(constants.SETTINGS_BIO) as HTMLInputElement)?.value;
	const email = (document.getElementById(constants.SETTINGS_EMAIL) as HTMLInputElement)?.value;
	const password = (document.getElementById(constants.SETTINGS_PASSWORD) as HTMLInputElement)?.value;

	const updatedUser = { image, username, bio, email, password };

	if (user.username === updatedUser.username) return <Redirect to={`/profile/${updatedUser.username}`} />;
	const handleUpdateUser = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		update({ ...updatedUser, token: '', loading: false }, user.token);
	};

	const handleSingOut = (event: React.MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		history.go(0);
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleUpdateUser}>
				<Title>
					<h2>Your Settings</h2>
				</Title>
				<Input
					id={constants.SETTINGS_IMAGE_URL}
					type="text"
					placeholder="URL of profile picture"
					defaultValue={user.image}
				/>
				<Input id={constants.SETTINGS_USERNAME} type="text" placeholder="Username" required defaultValue={user.username} />
				<TextArea id={constants.SETTINGS_BIO} placeholder="Short bio about you" defaultValue={user.bio} />
				<Input id={constants.SETTINGS_EMAIL} type="email" placeholder="Email" defaultValue={user.email} />
				<Input id={constants.SETTINGS_PASSWORD} type="password" placeholder="Password" />
				<Button type="submit">Update settings</Button>
				<ButtonOut onClick={handleSingOut}>Sing out</ButtonOut>
			</Form>
		</FormWrapper>
	);
};

export default Settings;
