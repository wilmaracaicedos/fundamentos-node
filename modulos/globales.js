console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
  console.log('Hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(() => {
  console.log('Hola');
});

console.log(process);
console.log(__dirname);
console.log(__filename);

global.miVariable = "elValor";
console.log(miVariable);
