import React, { Component } from 'react';

export default class MarkdownInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// The value of the input box (This is a controlled form)
			inputVal: ''
		};
	}
	render() {
		return (
			<div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
				<div className="ui tiny input" style={{ flex: '1' }}>
					<input
						label={'x'}
						/**
                         * When the user types something, the value is stored into the dom, 
                         * and then the value from the dom is forced onto the output, 
                         * 
                         * this way the value store nver lags behind what the user typed
                         * 
                         * This is known as a controlled form
                        */
						value={this.state.inputVal}
						onChange={(e) => {
							this.setState({ inputVal: e.target.value });
						}}
					/>
				</div>

				<button
					className="ui tiny green button"
					onClick={() => {
						// function that registers the text as a note
						this.props.addText(this.state.inputVal);
						// Resets the text
						this.setState({ inputVal: '' });
					}}
				>
					Add Text
				</button>
			</div>
		);
	}
}
