// Funcion recursiva
function esPar(finalizado) {
  //function par (final){
  if (finalizado === 0) return true;
  else if (finalizado === 1) return false;
  else if (finalizado < 0) return esPar(-finalizado);
  else return esPar(finalizado - 2);
}
console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-1));
