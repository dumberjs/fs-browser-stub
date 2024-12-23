const test = require('tape');
const fs = require('./index');
const promises = require('./promises');

test('fs exists in browser', t => {
  t.ok(fs.readFile);
  t.ok(fs.promises.writeFile);
  t.ok(fs.constants.O_CREAT);
  t.end();
});

test('fs.readFile cannnot be called in browser', t => {
  t.throws(() => fs.readFile('foo'), /fs\.readFile is not implemented in browser$/);
  t.end();
});

test('fs.promises.readFile cannnot be called in browser', t => {
  t.throws(() => fs.promises.readFile('foo'), /fs\.promises\.readFile is not implemented in browser$/);
  t.end();
});

test('fs/promises readFile cannnot be called in browser', t => {
  t.throws(() => promises.readFile('foo'), /fs\.promises\.readFile is not implemented in browser$/);
  t.end();
});
