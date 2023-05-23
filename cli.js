// Todo lo que ingresa el usuario por terminal
// Consumo de  promesas

const mdLinks = require('./index');
const validatePath = require('./purefunction');

// if(argumentsTerminal.includes('--validate')){
mdLinks(process.argv[2], { validate: true })
  .then((resp) => {
    const resultPath = validatePath(resp.path);
    // eslint-disable-next-line no-console
    console.log(resultPath);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
