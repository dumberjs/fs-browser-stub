function panic(api) {
  return function() {
    throw new Error(`fs.promises.${api} is not implemented in browser`);
  }
}

var promiseFuncs = [
  'access',
  'copyFile',
  'open',
  'opendir',
  'rename',
  'truncate',
  'rmdir',
  'mkdir',
  'readdir',
  'readlink',
  'symlink',
  'lstat',
  'stat',
  'link',
  'unlink',
  'chmod',
  'lchmod',
  'lchown',
  'chown',
  'utimes',
  'realpath',
  'mkdtemp',
  'writeFile',
  'appendFile',
  'readFile'
];

var i, ii, n;
var promises = {};

for (i = 0, ii = promiseFuncs.length; i < ii; i++) {
  n = promiseFuncs[i];
  promises[n] = panic(n);
}

module.exports = promises;
