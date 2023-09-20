function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla..');
      // resolve(nombre);
      reject('Hay un error');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
}

// --

console.log('Iniciando el proceso...');
hola('Wilmar')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log('Terminado el proceso');
  })
  .catch(error => {
    console.log('Ha habido un error');
    console.log('Error: ' + error);
  });