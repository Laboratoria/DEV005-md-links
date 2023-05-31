/* eslint-disable max-len */
/* eslint-disable no-undef */
// const mdLinks = require('..');
const path = require('path');
const fs = require('fs');
const functions = require('../src/functions');

const pathUserProve = 'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD';
const exampleAllMdfiles = [
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd1.md',
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd2.md',
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\ismd3.md',
  'C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD\\isREADME.md',
];

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

jest.mock('fs');
describe('isAdirectory', () => {
  it('should confirm isDirectory and then return path.resolve', () => {
    expect(typeof functions.isAdirectory).toBe('function');
  });
});

describe('function readAdirectory and return arr of files with extension .md', () => {
  it('should return array with file extension .md', () => {
    expect(functions.readDirectory('C:\\Users\\Dell\\Desktop\\L A B _I N\\pRo_DEV005\\DEV005-md-links\\Prueba_MD')).toEqual(exampleAllMdfiles);
  });
  it('should return [] if the directory dosent have .md', () => {
    expect(functions.readDirectory('C:/Users/Dell/Desktop/L A B _I N/pRo_DEV005/DEV005-md-links/Prueba_MD/AnotherFolder')).toEqual([]);
  });
  it('its path is file && its .md return either', () => {
    expect(functions.readDirectory(pathUserProve)).toEqual(exampleAllMdfiles);
  });
});

// describe('mdLinks', () => {
//   it('should...', () => {
//     console.log('FIX ME!');
//   });
// });
