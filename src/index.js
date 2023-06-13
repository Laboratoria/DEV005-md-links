const { validRoute} = require ("./path.js") 
const { readFileMd} = require ("./readFileMd.js") 
const {validateLink}= require ('./validateLink.js')


const mdLinks=(path, option)=>{  
  return new Promise((resolve, reject)=>{
    const result=validRoute(path);  
    if(typeof result==='object'){ 
      //console.log('esto es option validate: '+option.validate);
      if(option.validate===true) {
        //sconsole.log('RUTA VALIDADA')
        //const links=
        readFileMd(result).then(objLinks=>{
          const linksValidate=objLinks.map(elink=>{
            //console.log(elink)
            return (validateLink(elink).then(vLink=>vLink).catch(err=>err));
          });
         resolve ( (Promise.all(linksValidate).then(linkV=>linkV)));
        });
        //resolve(links)
      }else{ 
        resolve(readFileMd(result));
      }
    }else{
      reject('La ruta no existe, ingrese una ruta válida');
    }
  })
}
//readFileMd('C:/Users/DREP/Downloads/carpeta md/DEPLOYMENT.md')
// const path=process.argv[2];
// const option={validate: process.argv[3]};
// //console.log(option.validate)
// mdLinks(path, option).then((result)=>{
//   console.log(result);
//   return result;
  
// }).catch(err=>console.error(err))


module.exports = {
  mdLinks,
}