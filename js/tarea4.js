const task4 = document.getElementById("tarea4");

task4.addEventListener("click", function (e) {
  const buttonTitle = e.target.textContent;
  containerResult.innerHTML = "";
  let divResult = document.createElement("div");
  let titleTask = document.createElement("h2");
  titleTask.innerHTML = `Solución ${buttonTitle}`;
  divResult.append(titleTask);
  containerResult.append(divResult);

  let myArray = [];
  for (let index = 0; index < 20; index++) {
    const element = Math.floor(Math.random() * 100) + 1;
    myArray.push(element);
  }

  let textResponse = document.createElement("p");
  textResponse.innerHTML = `Números aleatorios sin ordenar:  ${myArray}`;
  containerResult.append(textResponse);

  for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
      let tmp = 0;
      if (myArray[i] > myArray[j]) {
        tmp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = tmp;
      }
    }
  }
  let textOrders = document.createElement("p");
  textOrders.innerHTML = `Números aleatorios ordenados:  ${myArray}`;
  containerResult.append(textOrders);
});
