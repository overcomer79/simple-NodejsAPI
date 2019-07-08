const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

mysqlConnection.connect(err => {
    if (!err) {
        console.log('DB connection succeed');     
    }
    else {
        console.log('DB connection failed', err);
    }
});

module.exports = mysqlConnection;