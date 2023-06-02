/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const path = require('path');
const fs = require('fs');

const pathUser = process.argv[2];
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
// eslint-disable-next-line consistent-return
const isAdirectory = (pathUser) => {
  if (fs.statSync(pathUser).isDirectory()) {
    return path.resolve(pathUser);
  }
};

// Leer Directorio y Generar array de subDirectorios y archivos MD
const readDirectory = (pathUser) => {
  const allPathMd = [];
  let subDirectories = [];
  const allDirectory = fs.readdirSync(pathUser);
  allDirectory.forEach((file) => {
    if (file !== 'node_modules' && file !== '.git') {
      const newFile = path.resolve(pathUser, file);
      if (path.extname(newFile) === '.md') {
        allPathMd.push(newFile);
      } else if (fs.statSync(newFile).isDirectory()) {
        subDirectories = readDirectory(newFile);
        if (subDirectories.length > 0) {
          allPathMd.push(...subDirectories);
        }
      }
    }
  });
  return allPathMd;
};
// console.log(readDirectory('./prueba_MD'));

module.exports = {
  validatePath,
  isAdirectory,
  readDirectory,
};

