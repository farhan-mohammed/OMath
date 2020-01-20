import React, { Component } from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import Highlight from 'react-highlight-js';
export default class RenderItems extends Component {
	renderItem = item => {
		if (item.mode === 'math') {
			return (
				<div className="mathxd">
					<TeX math={item.payload} block></TeX>
				</div>
			);
		} else if (item.mode === 'python') {
			console.log(item.payload);
			return (
				<div className="code">
					<Highlight className="python">{item.payload}</Highlight>
				</div>
			);
		} else if (item.mode === 'javascript') {
			return (
				<div className="code">
					<Highlight className="javascript">{item.payload}</Highlight>
				</div>
			);
		} else if (item.mode === 'matlab') {
			return (
				<div className="code">
					<Highlight className="matlab">{item.payload}</Highlight>
				</div>
			);
		} else if (item.mode === 'java') {
			return (
				<div className="code">
					<Highlight className="java">{item.payload}</Highlight>
				</div>
			);
		} else {
			return <div style={{ marginBottom: '25px' }}>{item.payload}</div>;
		}
	};
	render() {
		return this.props.list.map(item => <div className="reader-con">{this.renderItem(item)}</div>);
	}
}
