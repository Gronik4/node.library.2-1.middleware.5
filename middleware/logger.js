import fs from 'fs';
import os from 'os';

export default function logger(req, res, next) {
  let now = moment();
  moment.lang('ru');
  const today = now.format('MMMM DD YYYY, hh:mm:ss');
  const {url, method} = req;
  const line = `${today} ${url} ${method}`;
  fs.appendFile('appeals', line + os.EOL, (err)=> {
    if(err) throw err;
  });
  next();
}
