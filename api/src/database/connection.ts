import * as config from '../knexfile'
import knex from 'knex'


const connection = knex(config);

connection.migrate.latest(config);

export default connection;