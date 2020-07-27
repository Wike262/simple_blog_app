import styled from 'styled-components';

export const NavList = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	list-style-type: none;
`;

export const NavItem = styled.li`
	margin: 5px 10px;
	padding: 5px;
	& .active {
		color: black;
	}
	& a {
		color: gray;
		transition: all 0.3s ease;
		&:hover {
			color: black;
		}
	}
`;
