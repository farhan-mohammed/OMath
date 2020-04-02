import axios from 'axios';
import headers from '../../keys/keys';
export default axios.create({
	baseURL: 'https://api.mathpix.com/v3',
	headers
});
