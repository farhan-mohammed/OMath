import React, { Component } from 'react';
import logoxde from '../images/thumb.png';
export default class logo extends Component {
	render() {
		return (
			<div className="logoxd">
				<div className="logoxd-con">
					<span>
						<img className="logoxd-img" src={logoxde} alt=""></img>S.T.E.M. Notes
					</span>
				</div>
			</div>
		);
	}
}
