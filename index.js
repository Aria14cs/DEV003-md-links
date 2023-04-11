const fs = require('fs');
const path= require('path');
//console.log(path,"path")
//recibe una ruta
const ruta='README.md';
console.log(ruta,"ruta");
//transforma la ruta de relativa a adsoluto

const resolveRuta = (ruta) =>{
  const resolverRuta=path.resolve(ruta)
  return resolverRuta;
}
console.log(resolveRuta(ruta),"resolveRuta")

//Verificar si el archivo existe:
const fileExists=(ruta)=>{
let fileExist = fs.existsSync(ruta);
return fileExist;
}
console.log(fileExists(ruta),"fileExists");
//tarea
//confirmar si es un archivo MD 
const fileMd =(ruta)=> {
  const fileMd2 =path.extname(ruta)==='.md'
  return fileMd2
}
console.log(fileMd('README.md'),"fileMd");


// extraerLink('README.md')

// si es archivo MD,leer el archivo MD 
//variable  global para guardar el contenido
let contFile=[];
const leerFile=(ruta)=>{
//  console.log(ruta,'rutaaa')
 const leer=fs.readFileSync(ruta,'utf-8');
 contFile = leer;
return contFile;
};
leerFile('./README.md')
console.log(contFile,'contendio')
//console.log(leerFile('./README.md'),"LEER DATOS MD");

//buscar extraer link (expresion regular )
//extraer link
const extraerLink= (archivoLink)=>{
  const link=RegExp(/(^|[^!])\[(.*)\]\((.*)\)/gm);
  const valido =link.exec(archivoLink);
 console.log(valido,"validoooo")
 // const invalido=

 return valido;
}
// se llama a la funcion creada y se pasa como argumento la variable global
extraerLink(contFile);

// }).catch(err => console.log(err.message))

  //console.log(extraerLink('./README.md'),'extraerlinks')
  //trabajar con promesas
//sincrono
// const extraerLink=(archivoLink)=>{
//   console.log(archivoLink,'archivoLink');
//   const link=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
   
//      const valido=archivoLink.match(link)
//         console.log(valido,"valido");
//         const invalido=mdlink.match(link)
//        console.log(invalido,"invalido");
//  //arroja array que se encuentran en el texto
//    return valido;

// }
// console.log(extraerLink(ruta));
// validar link


// texto y ruta 
// FECH CONSULTA  HTT PARA HTT
//-- VALIDED

//funciones creada para exportar el modulo, para pasar la test
module.exports = {
fileMd,
leerFile
};

