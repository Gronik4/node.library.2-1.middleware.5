const express = require('express');
const routerDesc = express.Router();
const fileMulter = require('../Middleware/file');

routerDesc.post('/upload-text', 
  fileMulter.single('desc-text'),
  (req, res)=> {
    if(req.file) {
      const {path} = req.file;
      res.status(200).json({path})
    }else {res.status(400).json({ error: '400 | Ошибка загрузки файла.' })}
  },
);

module.exports = routerDesc;
