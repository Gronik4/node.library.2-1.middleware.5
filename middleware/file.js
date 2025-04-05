const multer = require('multer');
const { nanoid } = require('nanoid');

const fileStorage = multer.diskStorage({
  destination(req, file, cb) { // Настойка хранилища
    cb(null, 'library'); // Первый параметр - ошибка, второй - директория для хранения
  },
  filename(req, file, cb) { // Настройка именования файлов
    cb(null, `${nanoid(7)}-${file.originalname}`);
    console.log(nanoid(7) + file.originalname);
  }
});
 //const allowedTypes = ['image/png', 'image/jpg', 'application/pdf', 'text/plain', 'text/js']; // Разрешенные типы файлов
 /*const fileFilter = (req, file, cb) => { //Фильтр типов файлов 
   if (allowedTypes.includes(file.mimetype)) {
     cb(null, true); 
   } else {
     cb(null, false);
   }
 };*/

 module.exports = multer({fileStorage});
