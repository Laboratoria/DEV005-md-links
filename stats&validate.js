// MOCK de Objeto de links Validados
// const arrObjLinksValidated = [
//   {
//     href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
//     text: 'recurso',
//     pathUser: './ejemplo.md',
//     code: 200,
//     status: 'OK',
//   },
//   {
//     href: 'ht//nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
//     text: 'Leer un directorio',
//     pathUser: './prueba_MD/AnotherFolder/ismd3.md',
//     code: 'ECONNREFUSED',
//     status: 'Fail',
//   },
//   {
//     href: 'https://www.youtube.com/watch?v=dfsdfsdf',
//     text: 'sourceeeesss',
//     pathUser: './ejemplo.md',
//     code: 200,
//     status: 'OK',
//   },
//   {
//     href: 'https/docs.npmjs.com/getting-started/what-is-npm',
//     text: 'NPM',
//     pathUser: './prueba_MD/AnotherFolder/ismd3.md',
//     code: 'ECONNREFUSED',
//     status: 'Fail',
//   },
// ];
// Fuinciòn Obtener --stats
const getLinksStats = (arrObjLinks) => {
  const arrUrls = arrObjLinks.map((element) => element.href);
  const uniqueLinks = Array.from(new Set(arrUrls));
  return {
    total: arrUrls.length,
    unique: uniqueLinks.length,
  };
};
// Fuinciòn Obtener --stats & --validates
const getLinksStatsValidated = (arrObjLinks) => {
  const arrUrls = arrObjLinks.map((element) => element.href);
  const uniqueLinks = Array.from(new Set(arrUrls));
  const brokenLinks = arrObjLinks.filter((element) => element.status === 'Fail');
  return {
    total: arrUrls.length,
    unique: uniqueLinks.length,
    broken: brokenLinks.length,
  };
};

// console.log(getLinksStatsValidated(arrObjLinksValidated));

module.exports = {
  getLinksStats,
  getLinksStatsValidated,
};
