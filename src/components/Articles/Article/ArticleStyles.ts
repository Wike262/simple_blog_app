import styled from 'styled-components';

export const WrapperArticle = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid gray;
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
export const ArticlePreview = styled.div`
	& h1 {
		font-size: 20px;
	}
	& a {
		color: gray;
		font-size: 14px;
	}
`;
export const TagList = styled.ul`
	margin: 0;
	padding: 0;
`;
