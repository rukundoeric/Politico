/* eslint-disable dot-notation */
import dotenv from 'dotenv'

const config = {}
dotenv.config()
config.development = {
	connectionString: process.env['DEV_DATABASE_URL'],
}

config.staging = {
	connectionString: process.env['STAG_DATABASE_URL'],
}

config.test = {
	connectionString: process.env['TEST_DATABASE_URL'],
}

config.production = {
	dbUrl: process.env['DATABASE_URL'],
}

module.exports = config
