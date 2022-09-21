const task3 = document.getElementById("tarea3");

task3.addEventListener("click", function (e) {
  const buttonTitle = e.target.textContent;
  containerResult.innerHTML = "";
  let divResult = document.createElement("div");
  let titleTask = document.createElement("h2");
  titleTask.innerHTML = `Solución ${buttonTitle}`;
  divResult.append(titleTask);
  containerResult.append(divResult);

  let inputRow = document.createElement("input");
  inputRow.setAttribute("id", "input-row");
  inputRow.setAttribute("type", "number");
  inputRow.setAttribute("placeholder", "Filas");
  containerResult.append(inputRow);

  let inputColumn = document.createElement("input");
  inputColumn.setAttribute("id", "input-column");
  inputColumn.setAttribute("type", "number");
  inputColumn.setAttribute("placeholder", "Columnas");
  containerResult.append(inputColumn);

  let buttonCreate = document.createElement("button");
  buttonCreate.setAttribute("id", "button-create");
  buttonCreate.setAttribute("type", "submit");
  buttonCreate.setAttribute("onClick", "createTable();");
  buttonCreate.textContent = "Crear";
  containerResult.append(buttonCreate);
});

function createTable() {
  const prevTable = document.querySelector(".custom-table");
  if (prevTable) prevTable.remove();

  const valueRow = parseInt(document.getElementById("input-row").value);
  const valueColumn = parseInt(document.getElementById("input-column").value);

  let table = document.createElement("table");
  table.setAttribute("class", "custom-table");
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < valueRow; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < valueColumn; j++) {
      let column = document.createElement("td");
      column.style.padding = "20px";
      row.appendChild(column);
    }
    tblBody.appendChild(row);
  }

  table.appendChild(tblBody);
  containerResult.appendChild(table);
}
