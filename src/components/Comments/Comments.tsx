import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import { CommentWrapper, Message, AuthorImage, MetaInfo, DeleteButton } from './CommentsStyles';
import { User, Comment } from '../../types';

interface Props {
	remove: Function;
	comments: Array<Comment>;
	articleSlug: string;
	user: User;
}

const Comments = ({ comments, remove, articleSlug, user }: Props) => {
	if (comments !== undefined) {
		return (
			<>
				{comments.map((item: Comment) => {
					const date = new Date(Date.parse(item.createdAt.toString())).toDateString();

					const handlerDelete = () => {
						remove(articleSlug, item.id, user.token);
					};
					return (
						<CommentWrapper key={item.body + item.createdAt}>
							<Message>{item.body}</Message>
							<MetaInfo>
								<Link to={`/profiles/${item.author.username}`}>
									<AuthorImage src={item.author.image} alt="Author-Avatar" />
								</Link>
								<Link to={{ pathname: `/profiles/${item.author.username}`, state: { author: item.author } }}>
									{item.author.username}
								</Link>
								<p>{date}</p>
								{item.author.username === user.username && (
									<DeleteButton onClick={handlerDelete}>
										<MdDelete />
									</DeleteButton>
								)}
							</MetaInfo>
						</CommentWrapper>
					);
				})}
			</>
		);
	}
	return <></>;
};

export default Comments;
