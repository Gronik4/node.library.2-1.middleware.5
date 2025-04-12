const express = require('express');
const stor = require('../utils/stor');
const Book = require('../utils/Book');
const { nanoid } = require('nanoid');
const fs = require('fs');

const routersBook = express.Router();

routersBook.post('/api/user/login', (req, res)=>{res.json('id: 1, mail: test@mail.ru ')});
routersBook.get('/api/books', (req, res)=> {res.json(stor.books)})
routersBook.get('/api/books/:id', (req, res)=> {
  const {id} = req.params;
  const findEl = stor.books.find(el=> el.id === id);
  if(findEl) {res.json(findEl);} else {
    res.status(404);
    res.json('404 | Книги с таким id нет в библиотеке.');
  }
});
routersBook.get('/api/books/:id/download', (req, res)=>{
  const {id} = req.params;
  const findEl = stor.books.find(el=> el.id === id);
  const text = fs.readFileSync(`library/${findEl.fileBook}`, 'utf8');
  res.json(text);
})
routersBook.post('/api/books', (req, res)=>{
  const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body;
  if(!title || !description || !authors || !favorite || !fileCover || !fileName || !fileBook) {
    res.status(204);
    res.json('204 | Запись не сделана, недостаточно данных.')
  } else {
    const id = nanoid(7);
    const newBook = new Book(id, title, description, authors, favorite, fileCover, fileName, fileBook);
    stor.books.push(newBook);
    res.status(201);
    res.json(stor.books);
  }
});
routersBook.put('/api/books/:id', (req, res)=>{
  const {id} = req.params;
  const idx = stor.books.findIndex(el=> el.id === id);
  if(idx !== -1){
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    stor.books[idx] = {
      ... stor.books[idx], title,  description, authors, favorite, fileCover, fileName
    }
    res.json(stor.books);
  } else {
    res.status(404);
    res.json('404 | Книги с таким id нет в библиотеке.');
  }
});
routersBook.delete('/api/books/:id', (req, res)=>{
  const {id} = req.params;
  const idx = stor.books.findIndex(el=> el.id === id);
  if(idx !== -1) {
    stor.books.splice(idx, 1);
    res.json(stor.books);
  } else {
    res.status(404);
    res.json('404 | Книги с таким id нет в библиотеке.');
  }
});

module.exports = routersBook;
