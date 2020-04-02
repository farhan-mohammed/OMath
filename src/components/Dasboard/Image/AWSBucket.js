import React, { Component } from 'react';
import axios from 'axios';

/**
 * I used this guide to create a function that uploads images to an S3 AWS bucket
 * https://medium.com/@khelif96/uploading-files-from-a-react-app-to-aws-s3-the-right-way-541dd6be689
 * 
 */

class AWSBucket extends Component {
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
	// Performs the upload to the AWS S3 Server
	handleUpload = (ev) => {
		if (this.uploadInput.files[0]) {
			let file = this.uploadInput.files[0];
			let fileParts = this.uploadInput.files[0].name.split('.');
			// console.log('Preparing the upload');
			axios
				//Sends the backend server the file name and type to create a signed request
				.post('https://frozen-reaches-96529.herokuapp.com/omath', {
					fileName: fileParts[0],
					fileType: fileParts[1]
				})
				// A successful respons means that the item was uplaoded!
				.then((response) => {
					// console.log(response);
					var returnData = response.data.data.returnData;
					// Stores the signed request
					var signedRequest = returnData.signedRequest;
					// the URL of the iamage after its uploaded
					var url = returnData.url;
					// Added the server location
					let tt =
						url.slice(0, 'https://stemnotes.s3'.length) +
						'.us-east-2' +
						url.slice('https://stemnotes.s3'.length);
					// Put the fileType in the headers for the upload
					var options = {
						headers: {
							'Content-Type': fileParts[1]
						}
					};
					// This is where we actually upload the file to the server
					axios
						.put(signedRequest, file, options)
						.then(() => {
							// Add the URL of the image as a note using the passed in function!
							this.props.addImage(tt);
						})
						.catch((error) => {
							console.log('ERROR ' + JSON.stringify(error));
						});
				})
				.catch((error) => {
					console.log(JSON.stringify(error));
				});
		}
	};

	render() {
		return (
			<div className="bucket-con">
				<div className="bucket-title">Choose a file to upload and then press Add to add it to the page!</div>
				<div className="bucket-input">
					<div className="ui tiny input">
						<input
							label={'x'}
							onChange={this.handleChange}
							ref={(ref) => {
								this.uploadInput = ref;
							}}
							type="file"
						/>
					</div>
					{/**HandleUpload is where all the magic happens */}
					<button className="ui tiny green button" onClick={this.handleUpload}>
						Add to Page
					</button>
				</div>
			</div>
		);
	}
}
export default AWSBucket;
