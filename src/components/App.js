import React, { Component } from 'react';
import MarkdownRender from './MarkdownRender';
import RenderItems from './RenderItems';
import DashBoard from './DashBoard';
import logo from '../images/thumb.png';
import '../css/styles.css';
import * as firebase from 'firebase';
// import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCfh--hxN3xBw3DPhB_7qflOdHnldBuwPs',
	authDomain: 'ipad-notes-project.firebaseapp.com',
	databaseURL: 'https://ipad-notes-project.firebaseio.com',
	projectId: 'ipad-notes-project',
	storageBucket: 'ipad-notes-project.appspot.com',
	messagingSenderId: '739419467489',
	appId: '1:739419467489:web:94122c376c58a6a29d91a0',
	measurementId: 'G-1PGCGTDD3P'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [], stored: [], lastAddedDate: '' };
	}
	loadDoc = () => {
		db.collection('Documents').get().then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				let input = doc.data();
				let output = [];
				let stored = [];
				let lastAddedDate = Date.now();
				for (const t in input) {
					for (var y = 0; y < input[t].length; y++) {
						if (input[t][y] == `"`) {
							input[t] = [ input[t].slice(0, y), '\\', input[t].slice(y) ].join('');
							y += 1;
						}
					}
					output.push({ ...JSON.parse(input[t].replace(/'/g, `"`)), id: t });
					stored.push(t);

					lastAddedDate = Date.now();
				}
				this.setState({ stored, list: output, lastAddedDate });
			});
		});
	};
	listenerDoc = () => {
		// db.collection('Documents')
		// 	.get()
		// 	.then(snapshot => {
		// 		snapshot.docs.forEach(doc => {
		// 			console.log(`SETUP ${doc.data().toString()}`);
		// 		});
		// 	});
		db.collection('Documents').onSnapshot((snapshot) => {
			snapshot.docChanges().forEach((change) => {
				if (change.type === 'modified') {
					let input = change.doc.data();
					let listed = this.state.list;
					let storaged = this.state.stored;
					let lastAddedDate = Date.now();

					for (const t in input) {
						if (!storaged.includes(t)) {
							listed.push({ ...JSON.parse(input[t].replace(/'/g, `"`)), id: t });
							storaged.push(t);
							lastAddedDate = Date.now();
						}

						this.setState({ stored: storaged, list: listed, lastAddedDate });
					}
				}
			});
		});
	};

	componentDidMount() {
		this.loadDoc();
		this.listenerDoc();
	}
	renderList = () =>
		this.state.list.map((item) => {
			return (
				<div key={item.id}>
					{item.id}
					<br />
					{item.mode}
					<br />
					{item.payload}
				</div>
			);
		});
	render() {
		let pp = this.state.list[this.state.list.length - 1];
		const idef = this.state.stored[this.state.stored.length - 1];
		const eqn =
			'\begin{equation} \begin{smallmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \\ end{smallmatrix} end{equation}';
		return (
			<div className="body">
				<div className="header">
					<span>
						<img className="header-logo" src={logo} alt="" />S.T.E.M. Notes
					</span>
				</div>
				<div className="page">
					<RenderItems list={this.state.list} db={db} firebase={firebase} updt={this.loadDoc} />
				</div>
				<DashBoard lastAdded={{ date: this.state.lastAddedDate, ...pp, id: idef }} />
			</div>
		);
	}
}
