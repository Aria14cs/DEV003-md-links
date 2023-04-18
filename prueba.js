// import { marked } from 'marked'
const fs = require("fs");
const path = require("path");
//console.log(path,"path")
//recibe una ruta
const rutaR = "README.md";
//console.log(ruta,"ruta");
//transforma la ruta de relativa a adsoluto

const resolveRuta = (ruta) => {
  // console.log(resolveRuta,'resolse')
  const resolverRuta = path.resolve(ruta);
  // console.log('resolveRutar',resolverRuta)
  return resolverRuta;
};
//console.log(resolveRuta(rutaR));

//Verificar si el archivo existe:
const fileExists = (ruta) => {
  let fileExist = fs.existsSync(ruta);
  return fileExist;
};
//console.log(fileExists(rutaR),"fileExists");
//tarea
//confirmar si es un archivo MD
const fileMd = (ruta) => {
  const fileMd2 = path.extname(ruta) === ".md";
  return fileMd2;
};

console.log(fileMd(rutaR));

const leerFile = (ruta) => {
  return new Promise((resolve,reject) => {
   fs.readFile(ruta,"utf-8",(err, data)=> {
      if(err){
        reject(err);
       // console.log(err,'err')
      } else{
        resolve(data);
        //console.log(data,'data')
      }
    })
  
  })
 
};
leerFile(rutaR)
.then((data)=>console.log(data));
.catch((error)=>console.log(error));

console.log(leerFile(rutaR), "leerrrrrr");

// extraerLink('README.md')

// si es archivo MD,leer el archivo MD
//variable  global para guardar el contenido

// const leerFile=(ruta)=>{
// //  console.log(ruta,'rutaaa')
//  const leer=fs.readFileSync(ruta,'utf-8');
//  return leer;
// };
// console.log('leerFile',leerFile(rutaR));

// leerFile('./README.md')
//console.log(contFile,'contendio')
//console.log(leerFile('./README.md'),"LEER DATOS MD");
//buscar extraer link (expresion regular )
// const extraerLink= (archivoLink)=>{
//   //variable creada para guardar lo recorrido
//   let newLink=[];
//   const expresionLink=/\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;

//   const arrayLink=leerFile(archivoLink)
//   console.log('leerFile',leerFile)
//   console.log('array Link',arrayLink)
//   arrayLink.macht(expresionLink);

//recorrer y extraer text del link
// console.log(arrayLink,'hhh')

// }
// se llama a la funcion creada y se pasa como argumento la variable global
// extraerLink(contFile);

//

// const texRuta =(text,href)=>{//Valor de retorno
//   // const renderer = new marked.Renderer();
//   let linkMD=[];

//  const textRuta= linkMD(text,href){
//   text:text,
//   href:href,
// }
// return linkMD;
// } ;
// console.log(texRuta,'texRuta')

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

// FECH CONSULTA  HTT PARA HTT
//-- VALIDED

//funciones creada para exportar el modulo, para pasar la test
