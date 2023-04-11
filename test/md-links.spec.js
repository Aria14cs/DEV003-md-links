const { fileMd, leerFile }=require('../index.js');
//const mdLinks = require('./index.js');
// describe('mdLinks', () => {
//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
describe('existe archivo MD', () => {
  it('devuelve true para archivos con extensión .md', () => {
    expect(fileMd('C:\Users\Laboratoria\PROYECTO4\DEV003-md-links\README.md')).toBe(true);
  });

  it('devuelve false para archivos con extensión diferente a .md', () => {
    expect(fileMd('prueba.txt')).toBe(false);
  });
});

describe('leer el archivo MD',()=>{
  it('..', () =>{
    expect(leerFile('C:\Users\Laboratoria\PROYECTO4\DEV003-md-links\README.md')).toBe(true);
  });

it('',() => {
expect(leerFile('prueba.txt')).toBe(false);
});
});