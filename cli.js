#!/usr/bin/env node
/* eslint-disable no-console */
// Todo lo que ingresa el usuario por terminal
const mdLinks = require('./mdLinks');
const statsAndvalidate = require('./stats&validate');

const pathUser = process.argv[2];
const options = {};
const validate = process.argv.includes('--validate');
const stats = process.argv.includes('--stats');

if (!validate && !stats) {
  options.stats = false;
  options.validate = false;
} else if (validate && !stats) {
  options.stats = false;
  options.validate = true;
} else if (!validate && stats) {
  options.stats = true;
  options.validate = false;
} else if (validate && stats) {
  options.stats = true;
  options.validate = true;
}
mdLinks(pathUser, options)
  .then((res) => {
    if (options.validate && options.stats) {
      console.log(statsAndvalidate.getLinksStatsValidated(res));
    } else if (options.stats) {
      console.log(statsAndvalidate.getLinksStats(res));
    } else { console.log(res); }
  });
