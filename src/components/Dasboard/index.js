import React, { Component } from 'react';
import MathDraw from './Math/MathDraw';
import WebBucket from './Image/AWSBucket';
let Pages = [ { index: 0, name: 'Overview', selected: true }, { index: 1, name: 'Drawing', selected: false } ];

export default class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { current: 1 };
	}
	componentDidMount() {
		console.log(this.props);
	}
	// Hella buggy does not work
	buttonClick = (x) => {
		return () => {
			if (x !== this.state.current && x !== undefined) {
				Pages[this.state.current].selected = false;
				Pages[x].selected = true;
				this.setState({ current: x });
			}
		};
	};

	renderHeaderButtons = () =>
		Pages.map((item) => (
			<div
				key={item.index}
				onClick={this.buttonClick(item.index)}
				className={`dashboard-header_button ${item.index === this.state.current
					? 'dashboard-header_button-selected'
					: ''}`}
			>
				{item.name}
			</div>
		));
	renderBody() {
		if (this.state.current == 1) {
			return (
				<div className="db-canvas_con">
					<WebBucket addImage={this.props.addImage} />
					<MathDraw updateEquation={this.props.updateEquation} />
					<iframe width="100%" height="300" src="https://www.youtube.com/embed/gKgpDePcQMg" />
				</div>
			);
		} else {
			return (
				<div style={{ padding: '20px', fontSize: '20px' }}>
					<p>
						Hi,
						<br />
						I'm Farhan and I made this app with my friends, if you're a professor or an educator who would
						like to contact me about this, please email me at farhan.mohammed@ryerson.ca
						<br />
						<br />
						Feel free to checkout my website <a href="https://farhan.site/">https://farhan.site/</a>
					</p>
				</div>
			);
		}
	}
	render() {
		const styledROw = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' };
		return (
			<div className="dashboard">
				<div className="dashboard-header">{this.renderHeaderButtons()}</div>
				<div className="dashboard-body">
					<div style={styledROw} className="dashboard-body_sec">
						{this.renderBody()}
					</div>
				</div>
			</div>
		);
	}
}
