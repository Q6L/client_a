const dotenv = require('dotenv');
const fs = require('fs');
const message = require('./message');

dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = message.create(name, number);

fs.writeFile('result.txt', result, (err) => {
  if (err) {
    console.error('エラーが発生しました。', err);
  } else {
    console.log('result.txt に結果を書き出しました。');
  }
});