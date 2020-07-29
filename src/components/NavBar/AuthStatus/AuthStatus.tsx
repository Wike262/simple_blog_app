import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, NavItem } from './AuthStatusStyles';
import { User } from '../../../types';

interface Props {
	user: User;
}

const AuthStatus = ({ user }: Props) => {
	if (user?.token) {
		return (
			<NavList>
				<NavItem>
					<NavLink to="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/article-create">New Article</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/settings">Settings</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to={{ pathname: `/profiles/${user.username}`, state: { author: user } }}>{user.username}</NavLink>
				</NavItem>
			</NavList>
		);
	} else {
		return (
			<NavList>
				<NavItem>
					<NavLink to="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/login">Sing In</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/register">Sing Up</NavLink>
				</NavItem>
			</NavList>
		);
	}
};

export default AuthStatus;
