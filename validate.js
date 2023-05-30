const fs = require('fs');
const path = require('path');
const axios = require('axios');
// const { readDirectory } = require('./functions');

const pathUser = process.argv[2];
// Funciòn Extraer Links de un Archivo y Hacer un Array de objetos
const getMdLinks = (path) => new Promise((res, rej) => {
  // Leer el Archivo
  fs.readFile(pathUser, 'utf8', (err, data) => {
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
        return ({ href, text, pathUser });
      });
      res(arrMdLinks);
    }
  });
});
// getMdLinks(path).then((res) => console.log(res));

// Funciòn Validar Links

// console.log(getMdLinks(path));
// const readAllmd = (path) => {
//   const getDirectory = readDirectory(pathUser);
//   const arrPromises = getDirectory.map((element) => getMdLinks(element));
//   return Promise.all(arrPromises);
// };

// Filtrar en el arr con # para quitar links internos
// const getLinksnotUrl = arrMdLinks.filter((txt) => .startsWith(hashtag));

// getMdLinks(path).then((res) => console.log(res));
// // funcion Extraer Links
// const getMdLinks = (pathUser) => {
//   fs.readFile(pathUser, 'utf8', (err, data) => {
//     // const regexToMd = /!?\[([^\]]*)\]\(([^\)]+)\)/gm;
//     const regexToMd = /\[([^\[]+)\](\(.*\))/gm;

// Lee el archivo
const readFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      reject(error);
    }
    // const getToget = getMdLinks(data);
    const regex = /!?\[([^\]]*)\]\(([^\)]+)\)/gm;
    const linksss = data.match(regex);
    console.log('Áqui Incia:', linksss, ':Aqui termina');
    resolve(linksss);
  });
});
readFile('./ejemplo.md').then((res) => res);
