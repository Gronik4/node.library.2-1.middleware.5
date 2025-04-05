const express = require('express');
const routerDesc = express.Router();
const fileMulter = require('../Middleware/file');

routerDesc.post('/upload-file',
  fileMulter.single('desc-text'),
  (req, res) => {
    if(req.file) {
      const {path} = req.file;
      console.log(req.file);
      res.json({path});
    } else {
      res.status(400);
      res.json('400 | Ошибка загрузки файла.');
    }
});

module.exports = routerDesc;
