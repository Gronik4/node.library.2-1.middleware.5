const express = require('express');

const logger = require('./middleware/logger');
const errRout = require('./middleware/not-found');
const routersBook = require('./routes/book-router');


const app = express();
app.use(express.json());

app.use(logger);

app.use('/', routersBook);
app.use(errRout);

const port = process.env.PORT || 8005;
app.listen(port, (err)=>{
  if(err) {
    return console.log(`string 65: ${err}`);
  } else {console.log(`Server starting on port ${port}`);}
});
