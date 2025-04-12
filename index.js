const express = require('express');

const logger = require('./Middleware/logger');
const errRout = require('./Middleware/not-found');
const routersBook = require('./Routes/book-router');
const routerDesc = require('./Routes/desc-router');


const app = express();
app.use(express.json());

app.use(logger);
//app.use('/api/books/:id/download', express.static('library'));
app.use('/', routersBook);
app.use('/desc-router', routerDesc);

app.use(errRout);

const port = process.env.PORT || 8005;
app.listen(port, (err)=>{
  if(err) {
    return console.log(`string 22: ${err}`);
  } else {console.log(`Server starting on port ${port}`);}
});
