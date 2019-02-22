import React from 'react';

const Comments = ({comments, deleteComment}) => {
	const commentList = comments.length ? (
		comments.map(comment => {
			return (
				<div key={ Math.random() } className="comment-wrapper card hoverable">
					<div>{ comment.author } said...</div>
					<div>{ comment.content }</div>
					<div className="del-button btn btn-small red darken-3 white-text" onClick={ () => deleteComment(comment.id) }>Delete comment</div>
				</div>
			)
		})
		) : (
			<span>Be the first to comment...</span>
		)

	return (
		<div>
			{ commentList }
		</div>
	)
}

export default Comments