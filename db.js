// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');

// Create a connection pool
var pool =
    mariadb.createPool({
        host: '',
        port: 3066,
        user: '',
        password: '',
        database: ''
    });

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
});