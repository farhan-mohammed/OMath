import React, { Component } from 'react';
import Paper from './Paper';
import DashBoard from './Dasboard';
import axios from 'axios';
import '../css/styles.css';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// increments as each a note is added, not supposed to decrement when a note is removed.
			counter: 3,
			// Stores the array of notes
			eqns: [
				{ index: 1, type: 'text', value: '# Welcome to OMath' },
				{ index: 2, type: 'text', value: '## Please Enter an equation' },
				{ index: 0, type: 'math', value: '[ x^n + y^n = z^n ]' }
			]
		};
	}
	/**
	 * addEquation
	 * @params x : This should be latex or an empty string
	 * @params src : base64 of the drawing
	 * Adds the parsed equation to the document
	 */
	addEquation = (x, src) => {
		let arr = this.state.eqns;
		if (x === '') {
			arr.push({ index: this.state.counter, type: 'image', src: src });
		} else {
			arr.push({ index: this.state.counter, type: 'math', value: x });
		}
		this.setState({ eqns: arr, counter: this.state.counter + 1 });
	};
	/**
	 * addImage
	 * @params src : the image URL
	 * Adds an image to to the end of document
	 */
	addImage = (x) => {
		let arr = this.state.eqns;
		arr.push({ index: this.state.counter, type: 'image', src: x });
		this.setState({ eqns: arr, counter: this.state.counter + 1 });
	};
	/**
	 * addText
	 * @params text : adds tex to the document
	 * Adds an textbox to to the end of document
	 */
	addText = (x) => {
		let arr = this.state.eqns;
		arr.push({ index: this.state.counter, type: 'text', value: x });
		this.setState({ eqns: arr, counter: this.state.counter + 1 });
	};
	/**
	 * updateIndex
	 * @params b - the index to update the value at
	 * @params value - the updated value
	 * Updates the value at index b
	 */
	updateIndex = (b, value) => {
		let storeEQ = this.state.eqns;
		for (let i = 0; i < storeEQ.length; i++) {
			if (storeEQ[i].index === b) {
				storeEQ[i].value = value;
				this.setState({ eqns: storeEQ });
				return;
			}
		}
	};
	/**
	 * removeIndex
	 * @params x - the index to remove
	 * Deletes the index that was passed through. 
	 */
	removeIndex = (x) => {
		let arr = this.state.eqns;
		arr.pop(x);
		this.setState({ eqns: arr });
	};
	render() {
		// The Paper is the component that renders the list of saved notes on screen, therefore it should have access to the list of notes and power to update and delete notes
		const paperProps = {
			removeItem: this.removeIndex,
			updateIndex: this.updateIndex,
			listOfMath: this.state.eqns
		};
		// The Dashboard is componenet where the user can input notes, therefore it should have access to the functions that add items to the list of equations
		const dashboardProps = {
			addEquation: this.addEquation,
			addImage: this.addImage,
			addText: this.addText
		};
		return (
			<div className="body">
				<div className="page">
					<Paper {...paperProps} />
				</div>
				<DashBoard {...dashboardProps} />
			</div>
		);
	}
}
