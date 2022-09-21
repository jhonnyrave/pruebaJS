const task5 = document.getElementById("tarea5");

task5.addEventListener("click", function (e) {
  const buttonTitle = e.target.textContent;
  containerResult.innerHTML = "";
  let divResult = document.createElement("div");
  let titleTask = document.createElement("h2");
  titleTask.innerHTML = `Solución ${buttonTitle}`;
  divResult.append(titleTask);
  containerResult.append(divResult);

  // Crea una matriz de abecedario
  let abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let letra1 = [];
  for (let i = 0; i < 10; i++) {
    const l1 = abc[Math.floor(Math.random() * 26)];
    letra1.push(l1);
  }

  let letra2 = [];
  for (let j = 0; j < 10; j++) {
    const l2 = abc[Math.floor(Math.random() * 26)];
    letra2.push(l2);
  }

  let textResponse = document.createElement("p");
  textResponse.innerHTML = `Arreglo A: [ ${letra1} ]`;
  containerResult.append(textResponse);

  let textResponse2 = document.createElement("p");
  textResponse2.innerHTML = `Arreglo B: [ ${letra2} ]`;
  containerResult.append(textResponse2);

  let union = [...letra1, ...letra2];
  let textUnion = document.createElement("p");
  textUnion.innerHTML = `Unión (A ⋃ B): [ ${union} ]`;
  containerResult.append(textUnion);

  let interseccion = letra1.filter((x) => letra2.includes(x));
  let textInterseccion = document.createElement("p");
  textInterseccion.innerHTML = `Intersección (A ⋂ B): [ ${interseccion} ] `;
  containerResult.append(textInterseccion);

  let diferencia = letra1.filter((x) => !letra2.includes(x));
  let textDiferencia = document.createElement("p");
  textDiferencia.innerHTML = `Diferencia (A ∆ B): [ ${diferencia} ] `;
  containerResult.append(textDiferencia);

  let diferenciaSimetrica = union.filter((x) => !interseccion.includes(x));
  let textDiferenciaSim = document.createElement("p");
  textDiferenciaSim.innerHTML = `Diferencia Simétrica: (A − B): [ ${diferenciaSimetrica} ] `;
  containerResult.append(textDiferenciaSim);
});
