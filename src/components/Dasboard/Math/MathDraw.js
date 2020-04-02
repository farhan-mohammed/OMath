import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';
import MathAPI from '../../apis/Math';
import axios from 'axios';
import initialFrame from './IntitialFrame';

const colors = [ '#000', '#fff', '#009FD6', '#34CBFF', '#038E3B', '#66CC00', '#E41326', '#FF0066' ];

class CanvasDrawExample extends Component {
	state = {
		color: colors[0],
		width: '100%',
		height: '400px',
		brushRadius: 3,
		lazyRadius: 0,
		source: 0
	};
	UpdateMath = () => {
		// console.log(this.state.source);
		MathAPI.post('/latex', {
			src: this.state.source,
			formats: [ 'latex_normal' ]
		})
			.then((res) => {
				console.log(res);
				if (res.data.latex_normal === '') {
				}
				axios
					.post('https://frozen-reaches-96529.herokuapp.com/stemnotes', {
						latex: res.data.latex_normal,
						src: this.state.source
					})
					.then(() => {
						console.log(res);
					})
					.catch((e) => console.log(e.message));
				this.props.updateEquation(res.data.latex_normal);
			})
			.catch((e) => console.log(e));
	};

	decreaseBrushSize = () => {
		if (this.state.brushRadius > 10) {
			this.setState({ brushRadius: this.state.brushRadius - 10 });
		} else if (this.state.brushRadius > 1) {
			this.setState({ brushRadius: this.state.brushRadius - 1 });
		} else if (this.state.brushRadius == 0.25) {
			return;
		} else {
			this.setState({ brushRadius: this.state.brushRadius - 0.25 });
		}
	};
	increaseBrushSizeBrushSize = () => {
		if (this.state.brushRadius < 1) {
			this.setState({ brushRadius: this.state.brushRadius + 0.25 });
		} else if (this.state.brushRadius == 10) {
			return;
		} else {
			this.setState({ brushRadius: this.state.brushRadius + 1 });
		}
	};
	onChangeCanvas = () => {
		// console.log(this.saveableCanvas.getSaveData());
		if (this.saveableCanvas)
			this.setState({ source: this.saveableCanvas.canvasContainer.children[1].toDataURL('image/png') });
	};
	renderImage() {
		if (this.state.source) {
			return <img src={this.state.source} />;
		} else {
			return <div>Click on a color</div>;
		}
	}
	render() {
		return (
			<div>
				<div className="cnv-tools">
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
					<div className="cnv-bs_con">
						<div className="mini green ui button" onClick={this.decreaseBrushSize}>
							{' < '}
						</div>
						<div className="ui blue label">{this.state.brushRadius}</div>
						<div className="mini green ui button" onClick={this.increaseBrushSizeBrushSize}>
							>
						</div>
					</div>
				</div>
				<div className="cnv-con" style={{ display: 'flex', width: this.state.width }}>
					<button
						className="mini green ui button"
						onClick={() => {
							this.saveableCanvas.loadSaveData(JSON.stringify(initialFrame));
							this.onChangeCanvas();
						}}
					>
						Clear
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
					<button onClick={this.UpdateMath} className="mini green ui button">
						Update
					</button>
				</div>
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
				The canvas can be a little buggy, but as soon as your first stroke works, everythings works well!
				<br />
				Look at the demo if want to see my use it
				<br />
			</div>
		);
	}
}
export default CanvasDrawExample;
