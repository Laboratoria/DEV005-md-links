//validar ruta
const fs=require('fs');
const path= require('path');

//Validar ruta
let  filesMd=[];
const validRoute=(route)=>{
   if(fs.existsSync(route)){
       pathsMd(route) ;
       return filesMd;
   }
}

const pathsMd=(route)=>{  
      if(fs.statSync(route).isFile()){
         if(path.parse(route).ext==='.md'){
             filesMd.push(route); 
         }
      }
      
      if(fs.statSync(route).isDirectory()){
         const newDirectory=fs.readdirSync(route);
            newDirectory.forEach(element=>{
               let newDir=path.parse(route).dir+'/'+path.parse(route).base+'/'+element;
               pathsMd(newDir);
            })
      }
}

module.exports={
   validRoute,
}
