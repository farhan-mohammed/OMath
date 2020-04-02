import React, { Component } from 'react';
import axios from 'axios';
class WebBucket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success: false,
			url: ''
		};
	}

	handleChange = (ev) => {
		this.setState({ success: false, url: '' });
	};
	// Perform the upload
	handleUpload = (ev) => {
		if (this.uploadInput.files[0]) {
			let file = this.uploadInput.files[0];
			let fileParts = this.uploadInput.files[0].name.split('.');
			console.log('Preparing the upload');
			axios
				.post('https://frozen-reaches-96529.herokuapp.com/omath', {
					fileName: fileParts[0],
					fileType: fileParts[1]
				})
				.then((response) => {
					console.log(response);
					var returnData = response.data.data.returnData;
					var signedRequest = returnData.signedRequest;
					var url = returnData.url;
					let tt =
						url.slice(0, 'https://stemnotes.s3'.length) +
						'.us-east-2' +
						url.slice('https://stemnotes.s3'.length);
					this.setState({ url: tt });
					console.log('Recieved a signed request ' + signedRequest);
					console.log(`${tt}.${fileParts[1]}`);
					// Put the fileType in the headers for the upload
					var options = {
						headers: {
							'Content-Type': fileParts[1]
						}
					};
					// this.props.addFile(`${tt}.${fileParts[1]}`);
					axios
						.put(signedRequest, file, options)
						.then((result) => {
							this.setState({ success: true });
							console.log(fileParts[1]);
							console.log(this.props);
							this.props.addImage(tt);
						})
						.catch((error) => {
							alert('ERROR ' + JSON.stringify(error));
						});
				})
				.catch((error) => {
					alert(JSON.stringify(error));
				});
		}
	};

	render() {
		return (
			<div className="bucket-con">
				<div className="bucket-title">Choose a file to upload and then press Add to add it to the page!</div>
				<div className="bucket-input">
					<div class="ui tiny input">
						<input
							label={'x'}
							onChange={this.handleChange}
							ref={(ref) => {
								this.uploadInput = ref;
							}}
							type="file"
						/>
					</div>

					<button className="ui tiny green basic button" onClick={this.handleUpload}>
						Add to Page
					</button>
				</div>
			</div>
		);
	}
}
export default WebBucket;
