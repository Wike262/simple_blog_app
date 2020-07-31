import styled from 'styled-components';

interface PageActive {
	readonly active: boolean;
}

export const PageButton = styled.button<PageActive>`
	background-color: ${(props) => (props.active ? '#5cb85c' : 'transparent')};
	color: ${(props) => (props.active ? '#fff' : '#000')};
	border: 1px solid ${(props) => (props.active ? '#5cb85c' : '#ddd')};
	border-radius: 5px;
	padding: 5px 10px;
	margin: 10px;
`;
