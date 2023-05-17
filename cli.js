// Todo lo que ingresa el usuario por terminal
// Consume promesas
const mdLinks = require('./index')
const validatePath = require('./purefunction');

// if(argumentsTerminal.includes('--validate')){
    mdLinks(process.argv[2], {validate:true})
    .then((resp) => {
      const resultPath = validatePath(resp.path)
      console.log(resultPath)
    }) 
    .catch((err)=> {
      console.log(err)
    })
