const fs = require('fs');
// const path = require('path');
const axios = require('axios');

// const pathUser = process.argv[2];
// Funciòn Extraer Links de un Archivo y Hacer un Array de objetos
// eslint-disable-next-line no-shadow, no-unused-vars
const getMdLinks = (pathMd) => new Promise((res, rej) => {
  // console.log(path, 9);
  // Leer el Archivo
  fs.readFile(pathMd, 'utf8', (err, data) => {
    // Con Expresión regular buscar coincidencia con los links en el archivo .md
    // gm global multilinea
    // eslint-disable-next-line no-useless-escape
    const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm;
    // const hashtag = '#';
    if (err) {
      rej(new Error('No se encontró el archivo, Verificar la Ruta'));
    } else if (data.match(regexMdLinks)) {
      const matchMdLinks = data.match(regexMdLinks);
      const arrMdLinks = matchMdLinks.map((link) => {
        // Convierte los strings en un array y elimina ']('
        const arrSplit = link.split('](');
        // Al 1er texto de cada array remplazar [ por vacio
        const text = arrSplit[0].replace('[', '');
        // Al 2do texto de cada array remplazar ) por vacio
        const href = arrSplit[1].replace(')', '');
        return ({ href, text, pathMd });
      });
      res(arrMdLinks);
    }
  });
});

const getAllMdLinks = (arrMds) => {
  const arrPromises = arrMds.map((link) => getMdLinks(link));
  return Promise.all(arrPromises);
};

// Funciòn Validar Links
const validateMdLinks = (arrLinks) => {
  const arraValidateLinks = arrLinks.map((link) => {
  // eslint-disable-next-line implicit-arrow-linebreak
    const newLink = { ...link };
    return axios.get(newLink.href)
      .then((res) => {
        if (res.status <= 399) {
          newLink.code = res.status;
          newLink.status = res.statusText;
        } else {
          newLink.code = res.status;
          newLink.status = 'Fail';
        }
        return newLink;
      })
      .catch((e) => {
        newLink.code = e.code;
        newLink.status = 'Fail';
        return newLink;
      });
  });
  return Promise.all(arraValidateLinks);
};
// getMdLinks(path).then((res) => validateMdLinks(res).then((responce) => console.log(responce)));

module.exports = {
  getMdLinks,
  getAllMdLinks,
  validateMdLinks,
};
