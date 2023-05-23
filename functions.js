const path = require('path');
const fs = require('fs');

// const pathUser = process.argv[2];
// Funciones puras que le diran que hacer al programa
// Paso a paso del Flujo / Step by Step with Flow
// La Ruta existe? / it Path exist?
const validatePath = (pathUser) => {
  if (!fs.existsSync(pathUser)) {
    return 'err';
  }
  // Si existe, decirme si es Absoluta/ if exist, it Absolute?
  if (path.isAbsolute(pathUser)) {
    return pathUser;
  }
  // si existe, es Relativa then devolverla absoluta / if exist && relative, getBack Absolute
  return path.resolve(pathUser);
};

// Es un directorio? / its a Directory?
const isAdirectory = (pathUser) => {
  if (fs.statSync(pathUser).isDirectory()) {
    return path.resolve(pathUser);
  }
};

// Leer Directorio y Generar array de subDirectorios y archivos MD
const readDirectory = (pathUser) => {
  const allMd = [];
  let subDirectories = [];
  const allDirectory = fs.readdirSync(pathUser);
  allDirectory.forEach((file) => {
    if (file !== 'node_modules' && file !== '.git') {
      const newFile = path.resolve(pathUser, file);
      if (path.extname(newFile) === '.md') {
        allMd.push(newFile);
      } else if (fs.statSync(newFile).isDirectory()) {
        subDirectories = readDirectory(newFile);
        if (subDirectories.length > 0) {
          allMd.push(...subDirectories);
        }
      }
    }
  });
  return allMd;
};
// console.log(readDirectory('./prueba_MD'));

module.exports = {
  validatePath,
  isAdirectory,
  readDirectory,
};
// Es un archivo.?
// const isaFile = (pathUser) => {
//   if (fs.statSync(pathUser).isFile()) {
//     return true;
//   } return 'is not a File';
// };
// // console.log(isaFile('./prueba_MD/isNotmd.js'));

// // valida que el archivo es MD
// const getFileMd = (pathUser) => {
//   const fileMd = path.extname(pathUser) === '.md';
//   return fileMd;
// };
