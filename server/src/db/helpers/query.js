export const CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS
    users(
      id SERIAL  PRIMARY KEY,
      firstName VARCHAR(128) NOT NULL,
      lastNAme VARCHAR(128) NOT NULL,
      ortherName VARCHAR(128) NOT NULL,
      email VARCHAR(128) UNIQUE NOT NULL,
      password VARCHAR(128) NOT NULL,
      passportUrl varchar(500),
      isAdmin BOOLEAN  NOT NULL,
      createdOn TIMESTAMP,
      modifiedOn TIMESTAMP
    )`

export const DROP_USER_TABLE = 'DROP TABLE IF EXISTS users'
