import React, { Component } from 'react';
// The library that renders LaTeX in the browser
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
// The library that renders markdown
import MarkdownRenderer from 'react-markdown-renderer';

// Paper renders a list of 'Note's
export default class Paper extends Component {
	/**
	 * The delete button is common throughout the different types
	 * This is component renders the section that holds the delete button
	 */
	renderDelete = (x) => {
		return (
			<div className="reader-delete">
				<button
					className="circular ui  inverted mini icon  green button"
					// Where the delete is triggered
					onClick={() => this.props.removeItem(x)}
				>
					<i className="x icon" />
				</button>
			</div>
		);
	};
	render() {
		return this.props.listOfMath.map((item) => {
			// Image type Notes cannot be edited at least for now
			if (item.type === 'image') {
				return (
					<div className="reader-con">
						{/**Section that holds the image */}
						<div style={{ flex: '1' }}>
							<img
								className="reader-img"
								style={{ width: '100%', padding: '20px' }}
								src={item.src}
								alt={''}
							/>
						</div>
						{/** The delete button */}
						{this.renderDelete(item.index)}
					</div>
				);
			}
			/** For the math and text type, an editable component is rendered */
			return <Note key={item.index} {...this.props} renderDelete={this.renderDelete} {...item} />;
		});
	}
}

const STATEEDIT = 'SE',
	STATESHOW = 'SW';
class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currState: STATESHOW,
			// This is the current value of the note
			item: this.props.value,
			// This is the value stored incase the user cancels their edits
			lastSave: this.props.value
		};
	}
	renderCore() {
		// Renders LaTeX if the note is math
		if (this.props.type === 'math') return <TeX block>{this.state.item}</TeX>;
		else if (this.props.type === 'text') {
			// Renders Markdown if its the note is normal text
			return (
				<div style={{ textAlign: 'left', width: '100%' }}>
					<MarkdownRenderer markdown={this.state.item} />
				</div>
			);
		}
	}
	// Renders the note with an option to delete or delete the note
	renderIntial() {
		let { index, renderDelete } = this.props;
		return (
			<div className="reader-con" key={index}>
				{/** The edit div */}
				<div className="reader-edit">
					<button
						className="circular ui  inverted mini green icon button"
						onClick={() => this.setState({ currState: STATEEDIT })}
					>
						<i className="icon edit" />
					</button>
				</div>
				{/** End of edit div */}

				<div className="reader-body">{this.renderCore()}</div>
				{renderDelete(index)}
			</div>
		);
	}
	// Reners the note's edit phase where options to cancel or save changes are given
	renderEditStage() {
		return (
			<div className="reader-con" key={this.props.index}>
				<div className="reader-body">
					<div class="ui action input">
						{/** The Cancel button */}
						<button
							class="ui button red"
							onClick={() => this.setState({ currState: STATESHOW, item: this.state.lastSave })}
						>
							Cancel
						</button>
						{/** The interactive text box that the user can edit */}
						<input
							type="text"
							value={this.state.item}
							onChange={(e) => {
								this.setState({ item: e.target.value });
							}}
						/>
						{/** The save button*/}
						<button
							class="ui button green"
							onClick={() => {
								this.props.updateIndex(this.props.index, this.state.item);
								this.setState({ currState: STATESHOW, lastSave: this.state.item });
							}}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		);
	}
	render() {
		let { currState } = this.state;
		// If the note is in the view stage
		if (currState === STATESHOW) return this.renderIntial();
		else if (currState === STATEEDIT)
			// If the note is in the edit stage
			return this.renderEditStage();
		// If the program does not recognize the state, then an error is sent
		return <div>Error in State</div>;
	}
}
