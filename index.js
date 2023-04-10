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

// si es archivo MD,leer el archivo MD 
const leerFile=(ruta)=>{
//  console.log(ruta,'rutaaa')

 const leer=fs.readFileSync(ruta,'utf-8');
//  const leer=fs.readFile(ruta,'utf-8',(err,archivo)=>{
//    if(err){
//   console.log(err,"error");
//      }else{
//          console.log(archivo,"archivo");
//  }
return leer;
};
 console.log(leerFile('./README.md'),"LEER DATOS MD");

//buscar extraer link (expresion regular )
 const extraerLink=(archivoLink)=>{
  // console.log(archivoLink,'archivoLink');
  const link=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  const valido=archivoLink.match(link)
  console.log(valido,"valido");
  const invalido=archivoLink.match(link)
console.log(invalido,"invalido");
  
  return valido
}
  console.log(extraerLink('./README.md'),'extraerlinks')
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




// console.log(file,"hola");
// module.exports = () => {
//   // ...
// };

