import styled from 'styled-components';

export const MessageWrapper = styled.div`
	background-color: #f5f5f5;
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	width: 700px;
	height: 130px;
`;

export const Message = styled.textarea`
	outline: none;
	border: none;
	background-color: #fff;
	padding: 15px;
	width: 100%;
	height: 70px;
	border-radius: 5px 5px 0 0;
	border-bottom: 1px solid #e5e5e5;
`;

export const AddCommentButton = styled.button`
	border: none;
	outline: none;
	background-color: #5cb85c;
	padding: 10px;
	border-radius: 5px;
	color: #fff;
	float: right;
	margin-right: 15px;
`;
