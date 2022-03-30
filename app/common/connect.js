var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbbanhngot'
});

connection.connect(function(err){
    if(err) console.log("Kết nối CSDL không thành công")
});

module.exports = connection;

