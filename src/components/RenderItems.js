import React, { Component } from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import Highlight from 'react-highlight-js';
export default class RenderItems extends Component {
	constructor(props) {
		super(props);
		this.state = { updated: 0 };
	}
	renderItem = (item) => {
		if (item.mode === 'math') {
			return (
				<div className="mathxd">
					<TeX math={item.payload} block />
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
		return this.props.list.map((item) => {
			const id = item.id;
			return (
				<div
					className="reader-con"
					onClick={() => {
						var ref = this.props.db.collection('Documents').doc('demo');
						let objt = {};
						objt[id] = this.props.firebase.firestore.FieldValue.delete();
						ref.update(objt);
						console.log('YOLO');
						this.props.updt();
					}}
				>
					{this.renderItem(item)}
				</div>
			);
		});
	}
}
