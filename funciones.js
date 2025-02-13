const fs = require("fs"); //libreria de node
const path = require("path");//libreria de node

const resolveRuta = (ruta) => {
  const resolverRuta = path.resolve(ruta);
  return resolverRuta;
};
//console.log(resolveRuta(rutaR));

const fileExists = (ruta) => {
  let fileExist = fs.existsSync(ruta);
  return fileExist;
};
//console.log(fileExists(rutaR), "fileExists");

const fileMd = (ruta) => {
  const fileMd2 = path.extname(ruta) === ".md";
  return fileMd2;
};
//console.log(fileMd(rutaR))

const leerFile = (ruta) => {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, "utf-8", (err, data) => {
      if (err) {
        reject(err);
        // console.log(err,'err')
      } else {
        resolve(data);
        //console.log(data,'data')
      }
    });
  });
};
// leerFile(rutaR)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const extraerLink = (data, ruta) => {
  const expresionRegular = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
  //console.log(expresionRegular,'gggg')
  let links = [];
  const matchLink = data.match(expresionRegular);
  if (matchLink !== null) {
    matchLink.forEach((link) => {
      //console.log(link,'linkkk')
      links.push({
        // href:link.substr(1,-1),
        // text:link.substr(1,-1),
        href: link.slice(link.indexOf("](h") + 2, -1),
        text: link.slice(1, link.indexOf("]")),
        file: ruta,
      });
    });
  }
  //console.log(links);
  return links;
};
//leerFile(rutaR).then((result) => {
//  extraerLink(result, rutaR);
// //});
 
const valLinks = (arrayLink) => { //recibe un arreglo de objetos
 // console.log(arrayLink,'gggg')
let linksArray=[];
 const statusLink = arrayLink.map(link=>{ 
   // console.log(link,'hhhhh')
  return fetch(link.href)
    .then(response => {
      linksArray.push({
        href: link.href,
        text:link.text,
        file:link.file,
        status: response.status,
        ok:response.statusText
      });
      return linksArray
    })
    .catch(err => {
      linksArray.push({
        href: link.href,
        status: err,
      });
      return linksArray;
    });
    //return linksArray;

  });
  return Promise.all(statusLink);
}
  
//  leerFile(rutaR).then ((result)=>{
//   valLinks(extraerLink(result,rutaR)).then((response)=>{
//   console.log (response,'mostrar')
//   })
//  })


module.exports = {
    resolveRuta,
    fileExists,
    fileMd,
    leerFile,
    extraerLink,
    valLinks
  };