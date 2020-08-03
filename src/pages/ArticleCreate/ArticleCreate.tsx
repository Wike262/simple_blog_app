import React, { FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { FormWrapper, Form, Input, Button, TextArea, TagList, Tag } from './ArticleCreateStyles';
import { User, Article } from '../../types';
import * as constants from '../constants';

interface Props {
	articles: Array<Article>;
	articleToUpdate?: Article;
	user: User;
	create: (article: Article, token: string) => void;
	update: (article: Article, token: string) => void;
}

const ArticleCreate = ({ articles, articleToUpdate, user, create, update }: Props) => {
	const [tags, setTag] = React.useState<string[]>(articleToUpdate?.tagList || []);
	if (!user.token) return <Redirect to="/login" />;
	if (
		articles?.length === 1 &&
		articles[0].title === (document.getElementById(constants.ARTICLE_TITLE) as HTMLInputElement)?.value
	)
		return <Redirect to={{ pathname: `/articles/${articles[0].slug}`, state: { slug: articles[0].slug } }} />;

	const handleCreate = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const title = (document.getElementById(constants.ARTICLE_TITLE) as HTMLInputElement).value;
		const description = (document.getElementById(constants.ARTICLE_DESCRIPTION) as HTMLInputElement).value;
		const body = (document.getElementById(constants.ARTICLE_BODY) as HTMLInputElement).value;

		const articleToAdd = {
			title,
			description,
			body,
			tagList: tags,
			slug: articleToUpdate?.slug!,
			updatedAt: 123,
			favorite: false,
			favoritesCount: 123,
			comments: { loading: false, comments: [] },
			author: { ...user, following: false, image: '' },
		};
		if (!!articleToUpdate?.slug) {
			update(articleToAdd, user.token);
			return <Redirect to={{ pathname: `/articles/${articles[0].slug}`, state: { slug: articles[0].slug } }} />;
		} else {
			create(articleToAdd, user.token);
			return <Redirect to={{ pathname: `/articles/${articles[0].slug}`, state: { slug: articles[0].slug } }} />;
		}
	};

	const handleEnterPress = (event: React.KeyboardEvent) => {
		if (event.key === constants.ENTER_CODE) {
			event.preventDefault();
			const tag = (document.getElementById(constants.ARTICLE_TAGS) as HTMLInputElement).value;
			if (!tags.find((item) => tag === item)) setTag([...tags, tag]);
		}
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleCreate}>
				<Input
					id={constants.ARTICLE_TITLE}
					type="text"
					placeholder="Article Title"
					defaultValue={articleToUpdate?.title}
					required
				/>
				<Input
					id={constants.ARTICLE_DESCRIPTION}
					type="text"
					placeholder="Article Description"
					defaultValue={articleToUpdate?.description}
					required
				/>
				<TextArea
					id={constants.ARTICLE_BODY}
					placeholder="Write your article"
					defaultValue={articleToUpdate?.body}
					required
				/>
				<Input id={constants.ARTICLE_TAGS} onKeyDown={handleEnterPress} type="text" placeholder="Enter Tags" />
				<TagList>
					{tags?.map((tag: string) => {
						return <Tag key={tag + Math.random()}>{tag}</Tag>;
					})}
				</TagList>

				<Button type="submit">Publish Article</Button>
			</Form>
		</FormWrapper>
	);
};

export default ArticleCreate;
