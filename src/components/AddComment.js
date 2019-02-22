import React, { Component } from 'react';

class AddComment extends Component {
	state = {
		author: '',
		content: ''
	}

	handleAuthorChange = (e) => {
		this.setState({
			author: e.target.value
		});
	}

	handleContentChange = (e) => {
		this.setState({
			content: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addComment(this.state);
		this.setState({
			author: '',
			content: ''
		});

	}

	render() {
		return (
			<div className="add-form">
				<form onSubmit={ this.handleSubmit } className="card hoverable p-bottom">
					<p className="p-top">ADD COMMENT</p>
					<input required onChange={ this.handleContentChange } value={this.state.content} type="text" placeholder="comment" />
					<input required id="name" onChange={ this.handleAuthorChange } value={this.state.author} type="text" placeholder="name" />
					<input value="submit" type="submit"/>
				</form>
			</div>
		)
	}
}

export default AddComment;