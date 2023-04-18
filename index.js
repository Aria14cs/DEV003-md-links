// import { marked } from 'marked'
const fs = require("fs");
const path = require("path");
//console.log(path,"path")
//recibe una ruta
const rutaR = "README.md";
//console.log(rutaR);

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
  matchLink.forEach(link => {
    //console.log(link,'linkkk')
   links.push({
   href:link.slice(link.indexOf('](h')+2,-1),
   text:link.slice(1,link.indexOf(']')),
  //  href:link[1],
  file:ruta,
  });
  });
   }
  console.log(links);
  return links;
};

leerFile(rutaR).then((result) => {
  extraerLink(result, rutaR);
});

// console.log(extraerLink "extraerlinks");

module.exports = {
  fileMd,
  leerFile,
};
