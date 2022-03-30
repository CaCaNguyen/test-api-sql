const { response } = require('express');
var Book = require('../models/book.model');
//cách gọi function data (thông dụng nhất) theo bên model trả dữ liệu về
exports.get_list = function (req, res){
    Book.get_all(function(data){
        res.send({result: data});
    });
}

exports.detail = function (req, res){
        Book.getById(req.params.id, function(response){
            res.send({result:response});
        });
}

//body parser

exports.add_book = function (req, res){
    
    //console.log(req);
    //var data = req.query;
    // đoi xiu threq.query.idầy search
    //var data = req.query.tendanhmuc;
    console.log('request data:',req.query);
    //const obj = JSON.parse(req.query);
    console.log('danh muc:',req.query.tendanhmuc);
    // lấy được param
    // truyền data vào lưu ý tên biến trong function không đặt trùng với các giao thức bên ngoài
   if(req.query.tendanhmuc == null){
   //    res.setHeader('ContentType','application/json');
       res.send({'data':null,'errorCode':res.errorCode});
   }
   else {
        Book.create(req.query.tendanhmuc, function(response){
        res.send({result: response});
   });
   } 
   
   
}

exports.delete_book = function (req, res){
    var id = req.params.id;
    Book.remove(id, function (response){
        res.send({result: response});
    });
}

exports.update_book = function (req, res){
    var data = req.body;
    Book.update(data, function (response){
        res.send({result: response});
    });
}

