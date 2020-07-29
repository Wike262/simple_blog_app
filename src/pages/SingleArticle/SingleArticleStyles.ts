import styled from 'styled-components';

export const ArticleBanner = styled.div`
	background-color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	color: #fff;
	padding: 25px 0;
	box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3);
	& .row {
		flex-direction: column;
	}
`;

export const ArticleTitle = styled.h1`
	color: #fff;
	font-size: 32px;
	margin-bottom: 15px;
`;

export const WrapperArticle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px 0;
`;

export const Info = styled.div`
	margin: 0 10px;
	& a {
		color: #5cb85c;
	}
	& p {
		font-size: 14px;
		color: gray;
	}
`;
export const AuthorImage = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin-top: 10px;
`;

export const ArticleMeta = styled.div`
	display: flex;
`;

export const TagList = styled.ul`
	margin: 0;
	padding: 0;
`;

export const CommentsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ArticleContent = styled.div`
	border-bottom: 1px solid #e5e5e5;
	margin-bottom: 10px;
`;
