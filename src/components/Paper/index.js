import React, { Component } from 'react';
import TeX from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
export default class RenderItems extends Component {
	constructor(props) {
		super(props);
		this.state = { updated: 0, updatecounte: 0 };
	}
	renderDelete = (onClick) => {
		return (
			<button className="circular ui  inverted mini icon  green button" onClick={onClick}>
				<i className="x icon" />
			</button>
		);
	};
	render() {
		return this.props.listOfMath.map((item) => {
			if (item.type === 'math') {
				return (
					<RenderItem
						key={item.index}
						removeItem={this.props.removeItem}
						updateEquation={this.props.updateIndex}
						updateItem={this.props.updateItem}
						index={item.index}
						latex={item.latex}
					/>
				);
			} else if (item.type === 'image') {
				return (
					<div className="reader-con">
						<div style={{ flex: '1' }}>
							<img className="reader-img" style={{ width: '100%', padding: '20px' }} src={item.src} />
						</div>
						<div className="reader-delete">
							<button
								className="circular ui  inverted mini icon  green button"
								onClick={() => this.props.removeItem(item.index)}
							>
								<i className="x icon" />
							</button>
						</div>
					</div>
				);
			} else if (item.type === 'pdf') {
				return (
					<div className="reader-con">
						{/* <PDFToImage src={item.src} /> */}
						<div className="reader-delete">
							<button
								className="circular ui  inverted mini icon  green button"
								onClick={() => this.props.removeItem(item.index)}
							>
								<i className="x icon" />
							</button>
						</div>
					</div>
				);
			}
		});
	}
}

const STATEEDIT = 'SE',
	STATESHOW = 'SW';
class RenderItem extends Component {
	constructor(props) {
		super(props);
		this.state = { currState: STATESHOW, item: this.props.latex, lastSave: this.props.latex };
	}
	render() {
		if (this.state.currState === STATESHOW) {
			return (
				<div className="reader-con" key={this.props.index}>
					<div className="reader-edit">
						<button
							className="circular ui  inverted mini green icon button"
							onClick={() => this.setState({ currState: STATEEDIT })}
						>
							<i className="icon edit" />
						</button>
					</div>
					<div className="reader-body">
						<TeX block>{this.state.item}</TeX>
					</div>
					<div className="reader-delete">
						<button
							className="circular ui  inverted mini icon  green button"
							onClick={() => this.props.removeItem(this.props.index)}
						>
							<i className="x icon" />
						</button>
					</div>
				</div>
			);
		} else if (this.state.currState === STATEEDIT) {
			return (
				<div className="reader-con" key={this.props.index}>
					<div className="reader-body">
						<div class="ui action input">
							<button
								class="ui button red"
								onClick={() => this.setState({ currState: STATESHOW, item: this.state.lastSave })}
							>
								Cancel
							</button>
							<input
								type="text"
								value={this.state.item}
								onChange={(e) => {
									this.setState({ item: e.target.value });
								}}
							/>
							<button
								class="ui button green"
								onClick={() => {
									this.props.updateEquation(this.props.index, this.state.item);
									this.setState({ currState: STATESHOW, lastSave: this.state.item });
								}}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			);
		} else {
			return <div>Error in State</div>;
		}
	}
}
