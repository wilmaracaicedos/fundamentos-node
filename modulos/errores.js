function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en mi función asíncrona');
      cb(error);
    }
  });
}

try {
  // otraFuncion();
  seRompeAsincrona((err) => {
    console.log(err.message);
  });
} catch (error) {
  console.error('Vaya, algo se ha roto...');
  console.error(error);
  console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui esta al final');
