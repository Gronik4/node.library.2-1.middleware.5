const fs = require('fs');
const os = require('os');
const moment = require('moment');
moment.locale('ru');

module.exports = (req, res, next)=> {
  let now = moment();
  const today = now.format('MMMM DD YYYY, HH:mm:ss');
  const {url, method} = req;
  const line = `${today} ${url} - ${method}`;
  fs.appendFile('requestIntoServer.log', line + os.EOL, (err)=> {
    if(err) throw err;
  });
  next();
}
