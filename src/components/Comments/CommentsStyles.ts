import styled from 'styled-components';

export const CommentWrapper = styled.div`
	background-color: #e5e5e5;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	width: 700px;
	height: 130px;
	margin: 25px 0;
`;

export const Message = styled.p`
	outline: none;
	border: none;
	background-color: #fff;
	width: 100%;
	height: 70px;
	border-radius: 5px 5px 0 0;
	margin: 0;
	padding: 15px;
`;

export const MetaInfo = styled.div`
	margin: 10px;
	display: flex;
	align-items: center;
	& a {
		color: #5cb85c;
		margin: 0 10px;
	}
	& p {
		font-size: 14px;
		color: #bbb;
		margin: 0 10px;
	}
`;

export const AuthorImage = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
`;

export const DeleteButton = styled.button`
	outline: none;
	background-color: transparent;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	margin-left: auto;
`;
