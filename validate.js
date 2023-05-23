const MarkdownIt = require('markdown-it');
const fs = require('fs');
const { readDirectory } = require('./functions');

const pathUser = process.argv[2];

// funcion Extraer Links
const getMdLinks = (file) => {
  const objLinks = [];
  const md = new MarkdownIt();
  const result = md.render(file);
  return result;
};

// Lee el archivo
const readFile = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      reject(error);
    }
    const getToget = getMdLinks(data);
    const regex = /!?\[([^\]]*)\]\(([^\)]+)\)/gm;
    const linksss = data.match(regex);
    console.log('Áqui Incia:', linksss, ':Aqui termina');
    resolve(getToget);
  });
});
readFile('./ejemplo.md').then((res) => res);
const readAllmd = (pathUser) => {
  const getDirectory = readDirectory(pathUser);
  const arrPromises = getDirectory.map((element) => readFile(element));
  return Promise.all(arrPromises);
};

// readAllmd(pathUser).then((res) => console.log(res));
// console.log('soy result', result);
// result.forEach((file) => {
//   result.link = (href, title, text) => {
//     const linkProperties = {
//       href,
//       text,
//       file,
//     };
//     objLinks.push(linkProperties);
//   };
// });
// return objLinks;
