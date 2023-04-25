const {
  resolveRuta,
  fileExists,
  fileMd,
  leerFile,
  extraerLink,
  valLinks,
} = require("./funciones.js");

const mdLinks = (ruta, option) => {
  //dos parametros
  return new Promise((resolve, reject) => {
    //leer,resolve
    if (resolveRuta(ruta)) {
      //recibe ruta del archivo convertido
      //console.log(resolveRuta(ruta, "ruta"));
      if (fileExists(ruta)) {
        //console.log("ruta valida");
        if (fileMd(ruta)) {
          //console.log("archivo Md");
          leerFile(ruta)
            .then((data) => {
              const link = extraerLink(data,ruta);
            //console.log(extraerLink(data,ruta),'dataaa')
              if(option.validate===false){
               // console.log(option.validate,'option')
                resolve(link);
                //console.log(link,'linkss')
               }else{ //     terminar la promesa y devolver el resultado de extraer links
                valLinks(link)
                .then((valLinks) =>{
                  resolve(valLinks);
                })
                .catch(()=>{
                  reject(error)
                });
              }     
            })
            .catch((error) => {
            console.log(error)
            });
        } else {
          //console.log("archivo no es md");
          reject(new Error("archivo no es md"));      
        }
      } else {
        //console.log("ruta no existe");
        reject(new Error("ruta no existe"));
      }

     // resolve(resolveRuta(ruta));
    } else {
      reject(new Error("la ruta debe ser relativa"));
    }
  });
};

//  const ruta= 'README.md';
// const option={validate:true};

//console.log(mdLinks,'mdlinks')
mdLinks("README.md", { validate: true })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// leerFile(rutaR)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
