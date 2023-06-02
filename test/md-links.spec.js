/* eslint-disable max-len */
/* eslint-disable no-undef */
const path = require('path');
const functions = require('../functions');
const validated = require('../validate');
const statsValidated = require('../stats&validate');

// M O C K ' S
const pathUserProve = 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD';
const pathhUser = 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd1.md';
const exampleAllMdfiles = [
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd1.md',
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd2.md',
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd3.md',
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\isREADME.md',
];
// const noLinkMd = 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\sinmd.md';
const arrMockLinks = [
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de `npm install` acá',
    pathMd: 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd1.md',
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: '`course-parser`',
    pathMd: 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd1.md',
  },
];
const arrLinkss = [
  {
    href: 'https:/nodejs.org/',
    text: 'Node.js',
    pathMd: 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\isREADME.md',
  },
];
const arrLinksValidated = [
  {
    href: 'https:/nodejs.org/',
    text: 'Node.js',
    pathMd: 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\isREADME.md',
    code: 200,
    status: 'OK',
  },
];
const arrLinksStatsValidate = [
  {
    href: 'ht//nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    pathUser: './prueba_MD/AnotherFolder/ismd3.md',
    code: 'ECONNREFUSED',
    status: 'Fail',
  },
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    pathUser: './ejemplo.md',
    code: 200,
    status: 'OK',
  },
];

//  T E S T I N G

// F U N C T I O N S - - -
// TestIng si la ruta existe, si es realitva la devuelve absoluta
describe('validatePath', () => {
  it('should be a function', () => {
    expect(typeof functions.validatePath).toBe('function');
  });
  it('should return err if the path don`t exist', () => {
    expect(functions.validatePath('')).toBe('err');
  });
  it('if the path isAbsolute return path', () => {
    if (path.isAbsolute('C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links')) {
      expect(path.isAbsolute('C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links')).toBe(true);
    }
  });
  it('if it is none of the above', () => {
    expect(path.resolve('C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links')).toBe('C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links');
  });
});

// TestIng si es un Directorio
describe('isAdirectory', () => {
  it('should confirm isDirectory and then return path.resolve', () => {
    expect(typeof functions.isAdirectory).toBe('function');
  });
});

// // TestIng leer el directorio...
describe('function readAdirectory and return arr of files with extension .md', () => {
  it('should return array with file extension .md', () => { // en caso de tener archivos .md retorna un arreglo de archivos .md
    expect(functions.readDirectory('C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD')).toEqual(exampleAllMdfiles);
  });
  it('should return [] if the directory dosent have .md', () => { // en caso de NO tener archivos .md retorna un arreglo vacio
    expect(functions.readDirectory('C:/Users/Dell/Desktop/L A B _I N/pRo_DEV005/DEV005-md-links/Prueba_MD/AnotherFolder')).toEqual([]);
  });
  it('its path is file && its .md return either', () => { // en caso de tener archivos .md retorna un arreglo igual
    expect(functions.readDirectory(pathUserProve)).toEqual(exampleAllMdfiles);
  });
});

// V A L I D A T E - - -
// TestIng LeerArchivos y extraer .MD Links
describe('getMdLinks', () => {
  it('should be a function', () => {
    expect(typeof validated.getMdLinks).toBe('function');
  });
  it('should read objets array with files .md', () => validated.getMdLinks(pathhUser).then((links) => {
    expect(links).toEqual(arrMockLinks);
  }));
  // it('return Err Message when the file does not have .md links', () => validated.getMdLinks(noLinkMd).catch((e) => {
  //   expect(e.message).toBe('No se encontró el archivo, Verificar la Ruta');
  // }));
});
// TestIng Obtener array de .md Links
describe('getAllMdLinks', () => {
  it('should be a function', () => {
    expect(typeof validated.getAllMdLinks).toBe('function');
  });
});
// TestIng Validar Links
// jest.mock('axios');
describe('validate', () => {
  it('should be a function', () => {
    expect(typeof validated.getMdLinks).toBe('function');
  });
  it('return with validation', () => {
    validated.validateMdLinks(arrLinkss)
      .then((res) => {
        expect(Promise.all(res)).resolves.toEqual(arrLinksValidated);
      });
  });
});
// jest.mock('axios');
// beforeEach(() => {
//   axios.get.mockClear();
// });
// describe('validate', () => {
//   it('return status && statustext', async () => {
//     const response = await validated.validateMdLinks(arrLinkss);
//     axios.get.mockResolvedValueOnce(Promise.resolve(arrLinksValidated));
//     expect(response).toEqual(arrLinksValidated);
//   });
// });

// S T A T S  &&  V A L I D A T E - - -
// TestIng Obtener array de Estadisticas de Links totales y unicos
describe('statsValidated', () => {
  it('should be a function', () => {
    expect(typeof statsValidated.getLinksStats).toBe('function');
  });
  it('should show an objet stats of total && Unique Links', () => {
    expect(statsValidated.getLinksStats(arrLinksStatsValidate)).toEqual({ total: 2, unique: 2 });
  });
});
// TestIng Obtener array de Estadisticas de Links totales, unicos y Rotos
describe('getLinksStatsValidated', () => {
  it('should be a function', () => {
    expect(typeof statsValidated.getLinksStatsValidated).toBe('function');
  });
  it('should show an objet stats of total && Unique && broken Links', () => {
    expect(statsValidated.getLinksStatsValidated(arrLinksStatsValidate)).toEqual({ total: 2, unique: 2, broken: 1 });
  });
});

