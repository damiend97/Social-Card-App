import React, { Component } from 'react';
import Comments from './Comments';
import AddComment from './AddComment';

class Card extends Component {
	/* -------------------- STATE -------------------- */
	state = {
		likes: 0,
		shares: 0,
		commentsArray: [
			{
				id: 1,
				author: 'Robert L',
				content: 'Totally agree with you dog! Love the outdoors!'
			},
			{
				id: 2,
				author: 'Angela H',
				content: 'Rocky mountains are the best...hands down.'
			},
			{
				id: 3,
				author: 'Christine F',
				content: 'Wow what a great picture!'
			}
		]
	}

	/* -------------------- ADD/DELETE -------------------- */
	addComment = (comment) => {
		const but = document.querySelector('.c-button');
		but.style.color = 'blue';

		comment.id = Math.random();

		let commentsArray = [...this.state.commentsArray, comment];

		this.setState({
			commentsArray
		});
	}

	deleteComment = (id) => {
		if (this.state.commentsArray.length === 1) {
			const but = document.querySelector('.c-button');
			but.style.color = 'gray';
		}

		const comments = this.state.commentsArray.filter(comment => {
			return comment.id !== id;
		})

		this.setState({
			commentsArray: comments
		});
	}

	/* -------------------- CLICK EVENTS -------------------- */
	like = (e) => {
		e.preventDefault();
		e.target.style.color = "red";

		let { likes } = this.state;
		likes += 1;

		this.setState({
			likes
		})
	}

	share = (e) => {
		e.preventDefault();
		e.target.style.color = "orange";

		let { shares } = this.state;
		shares += 1;

		this.setState({
			shares
		})
	}

	/* -------------------- GET METHODS -------------------- */
	getComments = () => {
		const comments = this.state.comments === 1 ? (
			'comment'
		) : (
			'comments'
		);

		return comments;
	}

	getLikes = () => {
		const likes = this.state.likes === 1 ? (
			'like'
		) : (
			'likes'
		);

		return likes;
	}

	getShares = () => {
		const shares = this.state.shares === 1 ? (
			'share'
		) : (
			'shares'
		);

		return shares;
	}

	/* -------------------- RENDER -------------------- */
	render() {
		return (
			<div>
				<div className="container">
					<div className="card medium">
						<div className="card-image">
							<img src="http://materializecss.com/images/sample-1.jpg" alt="mountains" />
							<span className="card-title">The beautiful rocky mountains</span>
						</div>
						<div className="card-content">
							<p>We live in one of the most beautiful states in the country folks. Embrace it, enjoy it, and most importantly capture it! There are a lot of places around here that don't have views like this and personally, I couldn't live without it. What do you guys think? What is your favorite state?</p>
						</div>
						<div className="card-action">
							<span className="c-button">{this.state.commentsArray.length} { this.getComments() }</span>
							<span onClick={ this.like }>{this.state.likes} { this.getLikes() }</span>
							<span onClick= { this.share }>{this.state.shares} { this.getShares() }</span>
						</div>
					</div>
					<Comments comments={ this.state.commentsArray } deleteComment={ this.deleteComment }/>
					<AddComment addComment={ this.addComment } />
				</div>
			</div>
		)
	}

}

export default Card;