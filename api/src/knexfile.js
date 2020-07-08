"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    client: 'mysql',
    connection: {
        user: 'root',
        host: '127.0.0.1',
        database: 'mysql',
        password: 'password'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path_1.default.resolve('../api/src/migrations')
    }
};
// module.exports = {
//     client: 'sqlite3',
//     connection: {
//       filename: './database/database.sqlite',
//     },
// }
// module.exports={
//     client: 'MySQL',
//     connection: {
//         host: 'soutdev.cuevqr10c1ly.sa-east-1.rds.amazonaws.com',
//         port: '3000',
//         database: 'soutroot',
//         user:     'soutroot',
//         password: 'soutroot211'
//     },
// pool: {
//     min: 2,
//     max: 10
// },
// migrations: {
//     tableName: 'knex_migrations'
// }
// }
