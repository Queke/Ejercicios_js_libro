//Contar cadenas

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
