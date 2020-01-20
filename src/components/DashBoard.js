import React, { Component } from 'react';

let Pages = [
	{ index: 0, name: 'Overview', selected: true },
	// { index: 1, name: 'Something', selected: false },
	// { index: 2, name: 'Machine Brain', selected: false },
	// { index: 3, name: 'Last Entry', selected: false },
];

export default class DashBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { current: 0 };
	}
	componentDidMount() {
		console.log(this.props);
	}
	buttonClick = x => {
		const tt = x;
		return tt => {
			if (x != this.state.current && x != undefined) {
				Pages[this.state.current].selected = false;
				Pages[x].selected = true;
				this.setState({ current: x });
			}
		};
	};

	renderHeaderButtons = () =>
		Pages.map(item => (
			<div
				key={item.index}
				onClick={this.buttonClick(item.index)}
				className={`dashboard-header_button ${item.selected ? 'dashboard-header_button-selected' : ''}`}
			>
				{item.name}
			</div>
		));
	render() {
		const styledROw = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' };
		return (
			<div className="dashboard">
				<div className="dashboard-header">{this.renderHeaderButtons()}</div>
				<div className="dashboard-body">
					<div style={styledROw}>
						<div className="dashboard-body_sec last-added">
							<h1>Last Updated Item</h1>
							<div className="last-addedflexROw">
								<h2>Time Updated:{'   '}</h2>
								<p className="last-added_in">{Date(this.props.lastAdded.date)}</p>
							</div>
							<div className="last-addedflexROw">
								<h2>ID:{'   '}</h2>
								<p className="last-added_in">{this.props.lastAdded.id}</p>
							</div>
							<div className="last-addedflexROw">
								<h2>Note Type:{'   '}</h2>
								<p className="last-added_in">{this.props.lastAdded.mode}</p>
							</div>
							<div className="last-addedflexROw">
								<h2>Payload:{'   '}</h2>
								<p className="last-added_in">{this.props.lastAdded.payload}</p>
							</div>
						</div>
					</div>
					{/* <div style={styledROw}>
						<div className="dashboard-body_sec">{this.state.current}</div>
						<div className="dashboard-body_sec">{this.state.current}</div>
						<div className="dashboard-body_sec">{this.state.current}</div>
					</div>

					<div style={styledROw}>
						<div className="dashboard-body_sec">{this.state.current}</div>
						<div className="dashboard-body_sec">{this.state.current}</div>
					</div> */}
				</div>
			</div>
		);
	}
}
