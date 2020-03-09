import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const connection = {}
const env = process.env.NODE_ENV || 'development'
const config = require('./config')[env]


connection.db = new Pool(config)

export default connection
