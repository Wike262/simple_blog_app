import styled from 'styled-components';

export const ProfileBanner = styled.div`
	background-color: #f3f3f3;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	color: #000;
	padding: 25px 0;
	box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
`;

export const ArticlesChoose = styled.div`
	display: flex;
	width: 100%;
`;

interface Props {
	active: boolean;
}

export const ArticlesChooseButtons = styled.button`
	outline: none;
	background-color: transparent;
	border: 1px solid transparent;
	color: ${({ active }: Props) => (active ? '#5cb85c' : 'gray')};
	border-bottom: 2px solid ${({ active }: Props) => (active ? '#5cb85c' : 'transparent')};
	padding: 10px;
	&:focus {
		outline: none;
	}
`;

export const Avatar = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;
