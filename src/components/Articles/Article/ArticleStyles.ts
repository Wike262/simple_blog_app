import styled from 'styled-components';

export const WrapperArticle = styled.div`
	display: flex;
	flex-direction: column;
	border-top: 1px solid gray;
	padding: 15px;
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
	list-style-type: none;
	display: flex;
	float: right;
`;

export const Tag = styled.li`
	border: 1px solid #ddd;
	border-radius: 10px;
	color: #aaa;
	font-size: 12px;
	padding: 2px 4px;
`;

interface FavoriteButtonActive {
	readonly active: boolean;
}

export const FavoriteButton = styled.button<FavoriteButtonActive>`
	background-color: ${(active) => (active.active ? '#5cb85c' : 'transparent')};
	border: none;
	border-radius: 5px;
	display: flex;
	margin-left: auto;
	align-self: center;
	justify-content: center;
	align-items: center;
	padding: 2px 6px;
	font-size: 14px;
	color: ${(active) => (active.active ? '#fff' : '#5cb85c')};
	& svg {
		margin-right: 5px;
	}
`;
