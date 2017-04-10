var express = require('express');
var router = express.Router();
var Book = require('../models/model.js');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = 'mongodb://batman:batcave123@ds149700.mlab.com:49700/myappdatabase';
mongoose.connect(db);

//get all books
router.get('/books', function(req, res) {
    Book.find({}).exec(function(err, Book) {
        if (err) {
            console.log('error');
        } else {
            res.json(Book);
        }
    });

});

//getting a specific books using id
router.get('/book/:id', function(req, res) {
    Book.findOne({id: req.params.id}).exec(function(err, book) {
            if (err) {
                res.send('404 not found !');
            } else {
                res.json(book);
            }

        });
});


//delete a book
router.delete('/book/:id', function(req, res) {
    Book.findOneAndRemove({ id: req.params.id }, function(err, book) {
        if (err) {
            res.send('error deleting');
            console.log('error deleting');
        } else {
            res.send(book);
        }
    });
});

//add a new book

router.post('/books', function(req,res){
    var newBook = new Book();
    newBook.id = req.body.id;
    newBook.name = req.body.name;
    newBook.author = req.body.author;
    newBook.save(function(err,book){
        if(err){
            res.send("Error saving new book");
        }else{
            console.log(book);
            res.send(book);
        }
    });
});





module.exports = router;
