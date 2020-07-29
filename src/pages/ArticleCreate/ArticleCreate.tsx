import React, { FormEvent } from 'react';
import { Redirect } from 'react-router-dom';

import { FormWrapper, Form, Input, Button, TextArea } from './ArticleCreateStyles';
import { User, Article } from '../../types';

interface Props {
	articles: Array<Article>;
	user: User;
	create: Function;
}

const ArticleCreate = ({ articles, user, create }: Props) => {
	const [tags, setTag] = React.useState<string[]>([]);
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
		create(title, user.token, description, body, tags);
	};

	const handleEnterPress = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const tag = (document.getElementById('Article__Tags') as HTMLInputElement).value;
			setTag([...tags, tag]);
		}
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleCreate}>
				<Input id="Article__Title" type="text" placeholder="Article Title" required />
				<Input id="Article__Description" type="text" placeholder="Article Desctription" required />
				<TextArea id="Article__Body" placeholder="Write your article" required />
				<Input onKeyDown={handleEnterPress} id="Article__Tags" type="text" placeholder="Enter Tags" />
				<Button type="submit">Publish Article</Button>
			</Form>
		</FormWrapper>
	);
};

export default ArticleCreate;
