import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';
import MathAPI from '../../apis/Math';
import axios from 'axios';
import initialFrame from './IntitialFrame';

const colors = [ '#000', '#fff', '#009FD6', '#34CBFF', '#038E3B', '#66CC00', '#E41326', '#FF0066' ];

class CanvasDrawExample extends Component {
	state = {
		// The inital properties of the canvas
		color: colors[0],
		width: '100%',
		height: '400px',
		brushRadius: 3,
		lazyRadius: 0,
		source: 0
	};
	updateMath = () => {
		// Creates an API call to MathPix API to convert the canvas api to LaTeX
		MathAPI.post('/latex', {
			src: this.state.source,
			formats: [ 'latex_normal' ]
		})
			.then((res) => {
				// Updates my backend server with the result and the source of the image
				axios
					.post('https://frozen-reaches-96529.herokuapp.com/stemnotes', {
						latex: res.data.latex_normal,
						src: this.state.source
					})
					.then(() => {
						console.log(res);
					})
					.catch((e) => console.log(e.message));
				// This is where the latex is added to the notes
				this.props.addEquation(res.data.latex_normal, this.state.source);
			})
			.catch((e) => console.log(e));
	};

	onChangeCanvas = () => {
		// console.log(this.saveableCanvas.getSaveData());
		if (this.saveableCanvas)
			this.setState({ source: this.saveableCanvas.canvasContainer.children[1].toDataURL('image/png') });
	};
	render = () => {
		let renderColorPad = () => {
			return (
				<div className="cnv-cp_con">
					{colors.map((x) => {
						return (
							<div
								key={x}
								className="cnv-cp_color"
								style={{ backgroundColor: x }}
								onClick={() => {
									this.setState({ color: x });
								}}
							/>
						);
					})}
				</div>
			);
		};
		let renderBrushSizePanel = () => {
			let decreaseBrushSize = () => {
				if (this.state.brushRadius > 10) {
					this.setState({ brushRadius: this.state.brushRadius - 10 });
				} else if (this.state.brushRadius > 1) {
					this.setState({ brushRadius: this.state.brushRadius - 1 });
				} else if (this.state.brushRadius === 0.25) {
					return;
				} else {
					this.setState({ brushRadius: this.state.brushRadius - 0.25 });
				}
			};
			let increaseBrushSizeBrushSize = () => {
				if (this.state.brushRadius < 1) {
					this.setState({ brushRadius: this.state.brushRadius + 0.25 });
				} else if (this.state.brushRadius === 10) {
					return;
				} else {
					this.setState({ brushRadius: this.state.brushRadius + 1 });
				}
			};
			return (
				<div className="cnv-bs_con">
					<div className="mini green ui button" onClick={decreaseBrushSize}>
						{'<'}
					</div>
					<div className="ui green basic label" style={{ marginRight: '6px' }}>
						{this.state.brushRadius}
					</div>
					<div className="mini green ui button" onClick={increaseBrushSizeBrushSize}>
						{'>'}
					</div>
				</div>
			);
		};
		let renderCanvasFunctions = () => {
			return (
				<div className="cnv-con">
					<button
						className="mini green ui button"
						onClick={() => {
							this.saveableCanvas.loadSaveData(JSON.stringify(initialFrame));
							this.onChangeCanvas();
						}}
					>
						Clear
					</button>
					<button onClick={this.updateMath} className="mini green ui basic button">
						Update
					</button>
					<button
						className="mini green  ui button"
						onClick={() => {
							this.saveableCanvas.undo();
							this.onChangeCanvas();
						}}
					>
						Undo
					</button>
				</div>
			);
		};
		let renderCanvas = () => {
			return (
				<CanvasDraw
					onChange={this.onChangeCanvas}
					lazyRadius={0}
					canvasWidth={this.state.width}
					canvasHeight={this.state.height}
					hideGrid
					ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
					brushColor={this.state.color}
					brushRadius={this.state.brushRadius}
					saveData={JSON.stringify(initialFrame)}
				/>
			);
		};
		return (
			<div>
				<div className="cnv-tools">
					{renderColorPad()}
					{renderBrushSizePanel()}
				</div>
				{renderCanvasFunctions()}
				{renderCanvas()}
				The canvas can be a little buggy, but as soon as your first stroke works, everythings works well!
			</div>
		);
	};
}
export default CanvasDrawExample;
