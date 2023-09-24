const fs = require('fs').promises;

async function leer(ruta, cb) {
  // fs.readFile(ruta, (err, data) => {
  //   cb(data.toString());
  // });
  const data = await fs.readFile(ruta, { encoding: 'utf8' });
  cb(data);
}

async function escribir(ruta, contenido) {
  // fs.writeFile(ruta, contenido, (err) => {
  //   if (err) {
  //     console.error('No he podido escribirlo', err);
  //   } else {
  //     console.log('Se ha escrito correctamente');
  //   }
  // });
  try {
    await fs.writeFile(ruta, contenido);
    console.log('Se ha escrito correctamente');
  } catch (error) {
    console.error(error);
  }
}

function borrar(ruta) {
  // fs.unlink(ruta, cb);
  try {
    fs.unlink(ruta);
    console.log('Eliminado correctamente');
  } catch (error) {
    console.error(error);
  }
}

let contenido = 'Soy un archivo nuevo';
// escribir(`${__dirname}/archivo1.txt`, contenido);
leer(__dirname + '/archivo.txt', console.log);
// borrar(`${__dirname}/archivo1.txt`, console.log);
// borrar(`${__dirname}/archivo1.txt`);
