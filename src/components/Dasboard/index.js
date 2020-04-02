import React, { Component } from 'react';
// The Drawing Component
import MathDraw from './Math/MathDraw';
// The Uploading Image Compoenent
import WebBucket from './Image/AWSBucket';
// The Text Component
import MarkdownWrite from './Text/MarkdownInput';

// The different pages of the dashboard
let tabs = [ { index: 0, name: 'Demo', selected: true }, { index: 1, name: 'Drawing', selected: false } ];

export default class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { current: 1 };
	}

	/**
	 * selectTab - controller function for changing the tab
	 * @params x - the index of the tab to change to
	 */
	selectTab = (x) => () => {
		if (x !== this.state.current && x !== undefined) {
			tabs[this.state.current].selected = false;
			tabs[x].selected = true;
			this.setState({ current: x });
		}
	};

	/**
	 * renderHeaderMethods
	 * @return The JSX representing the header and its tabs
	 */
	renderHeaderButtons = () =>
		tabs.map((item) => (
			<div
				key={item.index}
				// Changes the tab on click
				onClick={this.selectTab(item.index)}
				className={`dashboard-header_button ${item.index === this.state.current
					? 'dashboard-header_button-selected'
					: ''}`}
			>
				{item.name}
			</div>
		));

	/**
	 * Renders the appropriate tab contents based on which one is selected
	 */
	renderBody() {
		const { current } = this.state;
		switch (current) {
			case 1:
				return (
					<div className="db-canvas_con">
						<WebBucket addImage={this.props.addImage} />
						<MathDraw addEquation={this.props.addEquation} />
						<MarkdownWrite addText={this.props.addText} />
					</div>
				);
			default:
				return (
					<div style={{ padding: '20px', fontSize: '20px', height: '100%' }}>
						<p>
							Hi,
							<br />
							I'm Farhan and I made this app with my friends, if you're a professor or an educator who
							would like to contact me about this, please email me at farhan.mohammed@ryerson.ca
							<br />
							<br />
							Feel free to checkout my website <a href="https://farhan.site/">https://farhan.site/</a>
						</p>
						<iframe
							title="Youtube demo"
							width="100%"
							height="300"
							src="https://www.youtube.com/embed/gKgpDePcQMg"
						/>
					</div>
				);
		}
	}
	render() {
		return (
			<div className="dashboard">
				<div className="dashboard-header">{this.renderHeaderButtons()}</div>
				<div className="dashboard-body">
					<div className="dashboard-body_sec">{this.renderBody()}</div>
				</div>
			</div>
		);
	}
}
