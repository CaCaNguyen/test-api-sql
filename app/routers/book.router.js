module.exports = function(router){

    var bookController = require('../controllers/book.controller');

    router.get('/book/list', bookController.get_list);// đây hả
    
    router.get('/book/detail/:id', bookController.detail);// hay đây

    //định nghĩa post
    router.post('/book/add', bookController.add_book);

    //định nghĩa delete
    router.delete('/book/delete/:id', bookController.delete_book);

    //định nghĩa put
    router.put('/book/update', bookController.update_book);

}