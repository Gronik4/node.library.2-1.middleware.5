const express = require('express');
const routerDesc = express.Router();
const fileMulter = require('../Middleware/file');

routerDesc.post('/upload-file',
  fileMulter.single('desc-text'),
  (req, res) => {
    if(req.file) {
      const {path} = req.file;
      res.json(path);
    }
    res.json();
});

module.exports = routerDesc;
