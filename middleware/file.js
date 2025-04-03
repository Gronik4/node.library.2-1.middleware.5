const multer = require('multer');
const { nanoid } = require('nanoid');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) { // Настойка хранилища
    cb(null, 'library'); // Первый параметр - ошибка, второй - директория
  },
  filename: function (req, file, cb) { // Настройка именования файлов
    cb(null, `${nanoid(7)}-${file.originalname}`);
  }
});
 //const allowedTypes = ['image/png', 'image/jpg', 'application/pdf', 'text/txt', 'text/js']; // Разрешенные типы файлов
 /*const fileFilter = (req, file, cb) => { //Фильтр типов файлов 
   if (allowedTypes.includes(file.mimetype)) {
     cb(null, true); 
   } else {
     cb(null, false);
   }
 };*/

 module.exports = multer({fileStorage});
