const {readFile}=require('fs')
const { searchLink} = require ("./searchLink.js"); 
//const { arrayReplaceAt } = require('markdown-it/lib/common/utils.js');
//const { error } = require('console');

//leer los archivos MD
const readFileMd= (filesMds)=>{
    const fileLinks=filesMds.map(file=>{
        const leerArchivo=(file)=>{
            return new Promise((resolve, reject)=>{
                 readFile(file,'utf8',(err, data) => {
                     if (err){reject (err)
                     //throw err;
                     }else{
                        resolve (searchLink(data, file));
                     }
                 });  
             })
         }
        return leerArchivo(file).then(res=>res).catch(err=>err)
    });
        return Promise.all(fileLinks).then(res=>res.flatMap(map=>map))
   }


  module.exports = {
    readFileMd,
  }