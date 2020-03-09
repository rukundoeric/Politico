import connection from './connection/connection'
import { CREATE_USER_TABLE, DROP_USER_TABLE } from './helpers/query'

const { db } = connection

/**
 * @author Rukundo Eric
 * @class Database
 * @description this class performs the whole Migrations oparations
 */
export default class Database {
	/**
   *
   * @param {Function} callback - Callback Function
   * @returns {Object} - Response object
   */
	async connect(callback) {
		return db.connect(err => callback(err))
	}

	/**
   *
   * @returns {Object} - Response object
   */
	migrate() {
		return {
			createTable: {
				all: () => {
					db.query(CREATE_USER_TABLE)
				}
			},
			dropTable: {
				all: () => {
					db.query(DROP_USER_TABLE)
				}
			}
		}
	}
}
