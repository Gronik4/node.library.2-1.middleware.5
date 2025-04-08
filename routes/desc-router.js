const express = require('express');
const routerDesc = express.Router();
const fileMulter = require('../Middleware/file');

routerDesc.post('/upload-file', (req, res, next)=> {
  if(!req.files || !req.files('desc-text')) {
    return res.status(400).json({ error: 'Файл не найден в запросе.' });
  }
  next();
},
  fileMulter.single('desc-text'),
  (req, res) => {
    try {
      if(req.file) {
        const {path} = req.file;
        res.status(200).json({path})
      } else {res.status(400).json({ error: '400 | Ошибка загрузки файла.' })}
    } catch(err) {
      res.status(500).json({ error: '500 | Внутреняя ошибка сервера.' })
    };
    (err, req, res, next)=> {
      res.status(500).json({ error: err.message || 'Ошибка при загрузке файла.' });
    }
});

module.exports = routerDesc;
