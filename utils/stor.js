const Book = require('./Book');
const stor = {
  books: [
    new Book(
      'sDwXvXL',
      'Мартин Иден',
      'Молодой моряк по имени Мартин Иден спасает от смерти незнакомого юношу',
      'Джек Лондон',
      '10',
      'Твёрдый',
      'MartinIden_JackL',
      '/api/books/sDwXvXL'
    ),
    new Book(
      'SgfsucY',
      'Безымянный раб',
      'Хорошее боевое фэнтези. На Торн не по своей воле попадают несколько землян.',
      'Виталий Зыков',
      '10',
      'Твёрдый',
      'NamelessSlave_VitaliZ',
      'api/books/SgfsucY'
    )
  ] 
};

module.exports = stor;
