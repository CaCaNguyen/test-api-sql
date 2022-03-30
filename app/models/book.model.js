//khai báo biến
const db = require('../common/connect');
const Book = function (book) {
    this.id = book.id;
    this.name = book.name;
    //trong cơ sở dữ liệu có bao nhiêu thuộc tính thì liệt kê bấy nhiêu thuộc tính
}
Book.get_all = function (result) {
    db.query("SELECT * FROM tbl_danhmuc", function (err, book) {
        if (err) {
            result(null);
            return;
        }
        else {
            result(book);
        }
    });
}


//truy xuất dữ liệu lấy toàn bộ danh sách
// Book.get_all = function(result){
//     var data = [
//         {"id":1,"name":"Book name 1"},
//         {"id":1,"name":"Book name 1"},
//         {"id":1,"name":"Book name 1"},
//         {"id":1,"name":"Book name 1"}

//     ];
//     result(data);
// }

//truy xuất dữ liệu theo id nhập
Book.getById = function (id, result) {
    //console.log(id);
    db.query("SELECT * FROM tbl_danhmuc WHERE id = ?", id, function (err, book) {
       //ç console.log(err, book);
        if (err || book.length == 0) {
            result(null);
        }
        else {
            result(book[0]);
        }
    });
}

//thêm dữ liệu mới
Book.create = function (data, result){
    console.log("create book",data);
             // tao sach mà them danh mục
         // em giỡn hả thư
    // ham này sai  sách mà danh mục?oi nhung ma nguoi ta goi tbl dung taats ca ham deu dc tru thang add voi up
   // boodatek cai nay là cái gì
    db.query("INSERT INTO tbl_danhmuc (tendanhmuc) VALUE (?)", data , function(err, book){
        if(err){
            result(err,null);
        }else{
            console.log("created book: ", { id: res.insertId, ...data});
            result({id: book.insertId, ...data});
        }
    });
    //}
    //else console.log('data is nULLL');
   
}
//update
Book.update = function (b, result) {
    console.log(b);
    db.query("UPDATE tbl_danhmuc SET tendanhmuc = ? WHERE id=?", [b.tendanhmuc,b.id] , function(err,book){
       console.log(err);
        if(err || book.length ==0){
            result(err,null);
        }else{
         console.log("created book: ", { id: res.insertId, ...data});
            result(b);
        }
    })
}

//xoá
Book.remove = function (id, result) {
    db.query("DELETE FROM tbl_danhmuc WHERE id = ?", id , function(err, book){
        if(err || book.length ==0){
            result(err,null);
        }else{
           // console.log("created book: ", { id: res.insertId, ...data});
            result("Xoá dữ liệu có id = "+id+" thành công");
        }
    })
}




module.exports = Book;