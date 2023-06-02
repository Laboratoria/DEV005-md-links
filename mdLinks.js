/* eslint-disable max-len */
// const validatePath = require('./functions');
const functions = require('./functions');
const validated = require('./validate');

// Invoke
const mdLinks = (path, option) => new Promise((resolve, reject) => {
  const resultPath = functions.validatePath(path);
  if (resultPath === 'err') {
    reject(new Error('Verificar la Ruta'));
  } else {
    const arrAllmdFIles = functions.readDirectory(resultPath);
    validated.getAllMdLinks(arrAllmdFIles)
      .then((res) => { // res = arrdelinks
        if (!option.validate) {
          resolve(res.flat());
        } else {
          validated.validateMdLinks(res.flat())
            .then((response) => resolve(response)); // response = arrdelinksValidados
        }
      });
  }
});

module.exports = mdLinks;
