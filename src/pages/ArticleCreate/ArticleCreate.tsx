import React, { FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { FormWrapper, Form, Input, Button, TextArea, TagList, Tag } from './ArticleCreateStyles';
import { User, Article } from '../../types';

interface Props {
	articles: Array<Article>;
	articleToUpdate?: Article;
	user: User;
	create: Function;
	update: Function;
}

const ArticleCreate = ({ articles, articleToUpdate, user, create, update }: Props) => {
	const [tags, setTag] = React.useState<string[]>(articleToUpdate?.tagList || []);
	if (!user.token) return <Redirect to="/login" />;
	if (
		articles?.length === 1 &&
		articles[0].title === (document.getElementById('Article__Title') as HTMLInputElement)?.value
	)
		return <Redirect to={{ pathname: `/articles/${articles[0].slug}`, state: { slug: articles[0].slug } }} />;

	const handleCreate = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const title = (document.getElementById('Article__Title') as HTMLInputElement).value;
		const description = (document.getElementById('Article__Description') as HTMLInputElement).value;
		const body = (document.getElementById('Article__Body') as HTMLInputElement).value;

		const articleToAdd = { title, description, body, tagList: tags, slug: articleToUpdate?.slug };
		if (!!articleToUpdate?.slug) {
			update(articleToAdd, user.token);
			return <Redirect to={{ pathname: `/articles/${articles[0].slug}`, state: { slug: articles[0].slug } }} />;
		} else {
			create(articleToAdd, user.token);
			return <Redirect to={{ pathname: `/articles/${articles[0].slug}`, state: { slug: articles[0].slug } }} />;
		}
	};

	const handleEnterPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const tag = (document.getElementById('Article__Tags') as HTMLInputElement).value;
			if (!tags.find((item) => tag === item)) setTag([...tags, tag]);
		}
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleCreate}>
				<Input id="Article__Title" type="text" placeholder="Article Title" defaultValue={articleToUpdate?.title} required />
				<Input
					id="Article__Description"
					type="text"
					placeholder="Article Desctription"
					defaultValue={articleToUpdate?.description}
					required
				/>
				<TextArea id="Article__Body" placeholder="Write your article" defaultValue={articleToUpdate?.body} required />
				<Input onKeyDown={handleEnterPress} id="Article__Tags" type="text" placeholder="Enter Tags" />
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
