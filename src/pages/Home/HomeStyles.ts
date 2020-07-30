import styled from 'styled-components';

export const HelloBanner = styled.div`
	background-color: #5cb85c;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	color: #fff;
	padding: 25px 0;
	box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
`;

export const Logotype = styled.h1`
	font-size: 40px;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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

export const TagListWrapper = styled.div`
	background-color: #f3f3f3;
`;

export const TagList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
`;

export const Tag = styled.li`
	background-color: #818a91;
	color: #fff;
	border-radius: 10px;
	margin: 5px;
	font-size: 12px;
	padding: 2px 4px;
`;
