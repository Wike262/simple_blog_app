export interface User {
	username: string;
	email: string;
	token: string;
	loading: boolean;
	image?: string;
	bio?: string;
	favorites?: Array<Article>;
	error?: {};
}

export interface Article {
	slug: string;
	title?: string;
	description?: string;
	body?: string;
	updatedAt: number;
	tagList: string[];
	favorite: boolean;
	comments: { loading: boolean; comments: any };
	favoritesCount: number;
	author: { username: string; image: string; following: boolean };
}

export interface Comment {
	body: string;
	author: User;
	id: string;
	createdAt: Date;
}

export interface ArticlesState {
	articles: Array<Article>;
	articlesCount: number;
	loading: false;
}

export interface StoreState {
	user: User;
	articles: ArticlesState;
}
