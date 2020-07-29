import React from 'react';

import * as types from '../../types';

import { MessageWrapper, Message, AddCommentButton } from './AddCommentStyle';

interface Props {
	setComment: Function;
	article: string;
	user: types.User;
}

const AddComment = ({ setComment, article, user }: Props) => {
	const handleClick = () => {
		const message = (document.getElementById('Article__Comment') as HTMLTextAreaElement).value;
		setComment(article, message, user.token);
	};
	return (
		<>
			<MessageWrapper>
				<Message id="Article__Comment" />
				<AddCommentButton onClick={handleClick}>Post Comment</AddCommentButton>
			</MessageWrapper>
		</>
	);
};

export default AddComment;
