/* eslint-disable no-console */
import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import api from './src/api/routes/index'
import Database from './src/db/index'
import globalMiddleware from './src/middleware/globalMiddleware'

dotenv.config()
const port = process.env.PORT || 3000
const app = express()
const db = new Database()

globalMiddleware(app)
app.get('/', (req, res) => { res.redirect('/docs') })
app.use('/api', api)
app.use((req, res) => {
	res.status(404).send({
		status: 404,
		error: {
			message: 'Page Not found',
		}
	})
})

db.connect(async (err) => {
	if (!err) {
		db.migrate().createTable.all()
		app.listen(port, () => {
			console.log('%s Database connected successful', chalk.green.bold('CONNECTED'))
			console.log(`%s PID: ${process.pid} Server listening on port: ${port} in ${process.env.NODE_ENV || 'development'} mode`, chalk.green.bold('RUNNING'))
		})
	} else {
		console.error(`%s Database not connected \n${err}`, chalk.red.bold('ERROR'))
	}
})
