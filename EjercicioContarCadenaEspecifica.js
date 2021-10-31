// Contar cadena en especifica
function contarFs(cadena) {
  let conta = 0;
  for (let i = 0; i < cadena.length; i++) {
    let valor = cadena[i];
    if (valor === "F") {
      conta++;
    }
  }
  console.log(conta);
}
function contarCaracteres(cadena, argumento) {
  let conta = 0;
  for (let i = 0; i < cadena.length; i++) {
    let valor = cadena[i];
    if (valor === argumento) {
      conta++;
    }
  }
  console.log("estamos buscando: ", argumento);
  console.log(conta);
}

contarFs("FFC");
contarCaracteres("kakkerlak", "a");
