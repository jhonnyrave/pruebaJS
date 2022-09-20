const task2 = document.getElementById("tarea2");
let containerResult = document.querySelector(".container-result");

task2.addEventListener("click", function (e) {
  const buttonTitle = e.target.textContent;
  containerResult.innerHTML = "";
  let divResult = document.createElement("div");
  let titleTask = document.createElement("h2");
  titleTask.innerHTML = `Solución ${buttonTitle}`;
  divResult.append(titleTask);
  containerResult.append(divResult);

  let inputYear = document.createElement("input");
  inputYear.setAttribute("id", "input-year");
  inputYear.setAttribute("type", "number");
  inputYear.setAttribute("placeholder", "Escribe el año");
  containerResult.append(inputYear);

  let buttonYear = document.createElement("button");
  buttonYear.setAttribute("id", "button-year");
  buttonYear.setAttribute("type", "submit");
  buttonYear.setAttribute("onClick", "yearBisiesto();");
  buttonYear.textContent = "Clasificar";
  containerResult.append(buttonYear);
});

function yearBisiesto() {
  const textYear = document.getElementById("response-year");
  if (textYear) textYear.remove();
  const valueYear = parseInt(document.getElementById("input-year").value);
  let textResponse = document.createElement("p");
  textResponse.setAttribute("id", "response-year");

  if (valueYear % 4 == 0 && (valueYear % 100 != 0 || valueYear % 400 == 0)) {
    textResponse.innerHTML = "El numero es bisiesto";
  } else {
    textResponse.innerHTML = "El numero no es bisiesto";
  }
  containerResult.append(textResponse);
}
