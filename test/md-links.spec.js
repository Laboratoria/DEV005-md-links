//const validateLink  = require('../src/validateLink.js');
const {validRoute}=require('../src/path')
const {mdLinks}=require('../src/index');

const objTestFalse= [
  {
    href: 'https://www.theodysseyonline.com/road-trips-worthwhile',
    text: 'Fuente',
    file: 'C:/Users/DREP/Downloads/carpeta md/NUEVA.md'
  },
  {
    href: 'https://www.theodysseyonline.com/road-trips-worthwhile2',
    text: 'Fuente1',
    file: 'C:/Users/DREP/Downloads/carpeta md/NUEVA.md'
  }
]

const objTestTrue=
// [
//   {
//     href: 'https://www.theodysseyonline.com/road-trips-worthwhile',
//     text: 'Fuente',
//     file: 'C:/Users/DREP/Downloads/carpeta md/NUEVA.md',
//     status: 200,
//     ok: 'OK'
//   },
//   {
//     href: 'https://www.theodysseyonline.com/road-trips-worthwhile2',
//     text: 'Fuente1',
//     file: 'C:/Users/DREP/Downloads/carpeta md/NUEVA.md',
//     status: 404,
//     ok: 'fail'
//   }
// ]



[{"file": "C:/Users/DREP/Downloads/carpeta md/NUEVA.md", 
"href": "https://www.theodysseyonline.com/road-trips-worthwhile", 
  "ok": "OK", 
  "status": 200, 
  "text": "Fuente"}, 
{"file": "C:/Users/DREP/Downloads/carpeta md/NUEVA.md", 
  "href": "https://www.theodysseyonline.com/road-trips-worthwhile2", 
  "ok": "fail", 
  "status": 404, 
  "text": "Fuente1"}, 
{"file": "C:/Users/DREP/Downloads/carpeta md/NUEVA.md", 
"href": "https://www.theodysseyonline.com/road-trips-worthwhile", 
"ok": "OK", 
"status": 200, 
"text": "Fuente"}, 
{"file": "C:/Users/DREP/Downloads/carpeta md/NUEVA.md", 
"href": "https://www.theodysseyonline.com/road-trips-worthwhile2", 
"ok": "fail", 
"status": 404, 
"text": "Fuente1"}]




//const validRoute=require('../src/path.js');


describe('mdLinks', ()=>{
  it('deberia ser una funcion',()=>{
    expect(typeof mdLinks).toBe('function');
  }) 

it ('debería retornar un error cuando no existe la ruta',(done)=>{
mdLinks().catch(error=>{
  expect(error).toBe('La ruta no existe, ingrese una ruta válida')
  done()
})
})

it('deberia retornar un array',(done)=>{
 expect(Array.isArray(validRoute('C:/Users/DREP/Downloads/carpeta md/Prueba1'))).toBe(true) 
 done()
})

it('debería retornar un array, con la option false',(done)=>{
  const path='C:/Users/DREP/Downloads/carpeta md/NUEVA.md'
  const option={validate:false}
  mdLinks(path,option).then(res=>{
    expect(res).toEqual(objTestFalse)
    done()
  })
})

it('debería retornar un array, con la option true',()=>{
  const path='C:/Users/DREP/Downloads/carpeta md/NUEVA.md'
  const option={validate:true}
  return expect(mdLinks(path,option)).resolves.toEqual(objTestTrue)
  })
})











      //return expect (mdLinks(path, option)).resolves.toBe('peanut butter');
      //expect (links).toBe('peanut butter')




  // test('Debería devolver un error', () => {
  //   const path = 'C:/Users/DREP/Downloads/carpeta md/DEPLOYMENT.m'
  //   const option={validate:true}
  //   //return (mdLinks(path, option).then(links=>{
  //     return expect (mdLinks(path, option)).rejectes.toMatch('error');
  //     //expect (links).toBe('peanut butter')
  //     //expect(Array.isArray(links).toBe(true));
  // //  }));
  // });


  // it('Debe devolver un array de objetos',()=>{
  //   const link='https://www.theodysseyonline.com/road-trips-worthwhile'
  //   expect(validateLink(link)).toBe('object')
  // })


