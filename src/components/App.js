import React, { Component } from 'react';
import RenderItems from './Paper';
import DashBoard from './Dasboard';
import '../css/styles.css';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 1, eqns: [ { index: 0, type: 'math', latex: '[ x^n + y^n = z^n ]' } ] };
	}
	updateEquation = (x) => {
		let arr = this.state.eqns;
		if (x === '') {
			arr.push({ index: this.state.counter, type: 'image', latex: x });
		} else {
			arr.push({ index: this.state.counter, type: 'math', latex: x });
		}
		this.setState({ eqns: arr, counter: this.state.counter + 1 });
	};
	addImage = (x) => {
		let arr = this.state.eqns;
		arr.push({ index: this.state.counter, type: 'image', src: x });
		this.setState({ eqns: arr, counter: this.state.counter + 1 });
	};
	updateIndex = (b, value) => {
		let storeEQ = this.state.eqns;
		for (let i = 0; i < storeEQ.length; i++) {
			if (storeEQ[i].index === b) {
				storeEQ[i].latex = value;
				break;
			}
		}
		this.setState({ eqns: storeEQ });
	};
	removeIndex = (x) => {
		let arr = this.state.eqns;
		arr.pop(x);
		this.setState({ eqns: arr });
	};
	render() {
		return (
			<div className="body">
				<div className="page">
					<RenderItems
						listOfMath={this.state.eqns}
						removeItem={this.removeIndex}
						updateIndex={this.updateIndex}
					/>
				</div>
				<DashBoard updateEquation={this.updateEquation} addImage={this.addImage} />
			</div>
		);
	}
}
