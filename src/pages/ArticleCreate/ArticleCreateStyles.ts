import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 550px;
	margin: 0 auto;
`;

export const FormWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export const Input = styled.input`
	background-color: transparent;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 15px 0;
	outline: none;
	font-size: 20px;
	width: 500px;
	&:focus {
		border-color: #66afe9;
	}
`;

export const TextArea = styled.textarea`
	background-color: transparent;
	border: 1px solid gray;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 15px 0;
	outline: none;
	font-size: 20px;
	width: 500px;
	&:focus {
		border-color: #66afe9;
	}
`;

export const Button = styled.button`
	background-color: #5cb85c;
	border: none;
	border-radius: 5px;
	outline: none;
	color: #fff;
	padding: 10px 20px;
	font-size: 20px;
	align-self: flex-end;
	&:disabled {
		opacity: 0.6;
	}
`;

export const TagList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	float: right;
	width: 550px;
`;

export const Tag = styled.li`
	border: 1px solid #ddd;
	border-radius: 10px;
	margin: 5px;
	color: #aaa;
	font-size: 12px;
	padding: 2px 4px;
`;
