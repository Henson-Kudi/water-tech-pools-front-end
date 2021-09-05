import axios from 'axios'

const port = 'http://localhost:5000/'

export const baseURL = axios.create({
    baseURL: port
})