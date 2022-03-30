//khoi tao server http
var express = require('express');
var app = express();

//cau hinh body-parser
var bodyParser = require('body-parser');
//.url
app.use(bodyParser.urlencoded({extended: true}));
//.json
app.use(bodyParser.json());



//require('./app/routers/home.router')(app);
//gọi đường dẫn đến router cần truy xuất dữ liệu
require('./app/routers/book.router')(app);

app.listen(3000, function(){
    console.log("Server listening on http://localhost:3000");
})