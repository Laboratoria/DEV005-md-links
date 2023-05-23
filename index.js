const validatePath = require('./functions');
// Invoke
const mdLinks = (path, option) => new Promise((resolve, reject) => {
  const resultPath = validatePath(path);
  if (resultPath === 'err') {
    reject('La ruta No existe');
  }
  resolve({ path, option });
});

module.exports = mdLinks;
