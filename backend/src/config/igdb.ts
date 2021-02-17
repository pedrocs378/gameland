import axios from 'axios'

export default {
	client_id: process.env.CLIENT_ID,
	client_secret: process.env.CLIENT_SECRET,

	api: axios.create({
		baseURL: 'https://api.igdb.com/v4',
		headers: {
			'Client-ID': process.env.CLIENT_ID,
			'Authorization': `Bearer ${process.env.IGDB_TOKEN}`
		}
	}),
}