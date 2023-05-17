const path = require('path')
const fs = require('fs'); 
// const { error } = require('console');

// Funciones puras que le diran que hacer al programa / Pure Functions who Indicate List TO.DO
// Paso a paso del Flujo / Step by Step with Flow
// La Ruta existe? / it Path exist?
const validatePath = (pathUser) => {
    if (!fs.existsSync(pathUser)){
        return 'err'
    }
    // Si existe, decirme si es Absoluta/ if exist, it Absolute?
    if(path.isAbsolute(pathUser)){
        return pathUser
    } else {
    // si existe, es Relativa then devolverla absoluta / if exist && relative, getBack Absolute
        return path.resolve(pathUser)
    }
}

module.exports = validatePath

