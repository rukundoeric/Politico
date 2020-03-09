import express from 'express'
import auth from './auth'

const api = express()

api.use('/auth', auth)

export default api
