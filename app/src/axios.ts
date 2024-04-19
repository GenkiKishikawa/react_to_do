import axios from 'axios'

const API_PORT = process.env.REACT_APP_API_PORT

export const API = axios.create({
	baseURL: `http://localhost:${API_PORT}`
})
