/* eslint-disable linebreak-style */
const fs = require('fs');
const path = require('path');

const paths = (userPath) => {
  const arrayMdFiles = [];
  if (
    fs.existsSync(userPath) === true
    && fs.statSync(userPath).isFile() === true
    && path.extname(userPath) === '.md'
  ) {
    arrayMdFiles.push(path.resolve(userPath));
    return arrayMdFiles;
  } if (
    fs.existsSync(userPath) === true
    && fs.statSync(userPath).isDirectory() === true
  ) {
    const filesInside = fs.readdirSync(userPath);
    filesInside.forEach((file) => {
      const pathPlusFileInside = path.join(userPath, file);
      const newFiles = paths(path.resolve(pathPlusFileInside));
      arrayMdFiles.push(newFiles);
    });
    return arrayMdFiles;
  }
  return undefined;
};

module.exports = {
  paths,
};
