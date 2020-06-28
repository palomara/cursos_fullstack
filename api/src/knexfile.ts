import path from 'path'

module.exports = {
    client: 'mysql2',
    connection: {
        host: 'demodaypalomadb.mysql.database.azure.com',
        port: '3306',
        database: 'Courses',
        user:     'Pfiap@demodaypalomadb',
        password: 'Paloma!@#$'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }   
};




// module.exports={
//     client: 'MySQL',
//     connection: {
//         host: 'soutdev.cuevqr10c1ly.sa-east-1.rds.amazonaws.com',
//         port: '3000',
//         database: 'soutroot',
//         user:     'soutroot',
//         password: 'soutroot211'
//     },
//     pool: {
//         min: 2,
//         max: 10
//     },
//     migrations: {
//         tableName: 'knex_migrations'
//     }
// }