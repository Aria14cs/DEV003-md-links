const {resolveRuta,fileExists, fileMd, leerFile,extraerLink, valLinks} = require('./funciones.js');

const mdLinks = (ruta,option) =>{ //dos parametros
  return new Promise((resolve,reject)=>{ //leer,resolve
   if(resolveRuta(ruta)){ //recibe ruta del archivo convertido
    console.log(resolveRuta(ruta,'ruta'))
  
    resolve(resolveRuta(ruta));
  } else{
    reject(new Error('la ruta debe ser relativa'));
  }
  });
} ;


const ruta= 'README.md';
const option={validate:true};

console.log(mdLinks)
mdLinks(ruta,option)
.then((result)=>{
  console.log(result)
})
.catch((error)=>{
  console.log(error)
})
// leerFile(rutaR)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
