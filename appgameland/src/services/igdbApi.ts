import axios from 'axios'

import igdbConfig from '../configs/igdb'

const igdbApi = axios.create({
	baseURL: 'https://api.igdb.com/v4',
	headers: {
		'Client-ID': igdbConfig.client_id,
		'Authorization': 'Bearer e7we8tvw6ytf0jjg5ephsgce1k920w'
	}
})

export default igdbApi