const task6 = document.getElementById("tarea6");

task6.addEventListener("click", function (e) {
  const buttonTitle = e.target.textContent;
  containerResult.innerHTML = "";
  let divResult = document.createElement("div");
  let titleTask = document.createElement("h2");
  titleTask.innerHTML = `Solución ${buttonTitle}`;
  divResult.append(titleTask);
  containerResult.append(divResult);

  let f = new Date();
  const day = f.getDate();
  const month = f.getMonth() + 1;
  const year = f.getFullYear();
  const fecha_fin = year + "-" + month + "-" + day;
  const fecha_ini = year + "-" + month + "-" + (day - 5);

  let token =
    "da133093f3d3468dbdb537bccda5f7e244d42286a1743a53762b80bec086ac00";
  let requestOptions = {
    method: "GET",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };
  let urlApi = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF63528/datos/${fecha_ini}/${fecha_fin}?token=${token}`;

  const ul = document.createElement("ul");
  fetch(urlApi, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let descripcionTipoCambio = data.bmx.series[0].titulo;
      let idserie = data.bmx.series[0].idSerie;
      let infoTipoCambio = data.bmx.series[0].datos;

      let textTitle = document.createElement("p");
      textTitle.innerHTML = `${descripcionTipoCambio} - serie: ${idserie}`;
      containerResult.appendChild(textTitle);

      let textDate = document.createElement("p");
      textDate.innerHTML = `Consulta de rango de fecha desde: ${fecha_ini} hasta ${fecha_fin}`;
      containerResult.appendChild(textDate);

      let table = document.createElement("table");
      table.setAttribute("class", "custom-table");
      let tblBody = document.createElement("tbody");
      let row = document.createElement("tr");

      let date = document.createElement("th");
      date.innerHTML = "Fecha";
      row.append(date);

      let title = document.createElement("th");
      title.innerHTML = "Tipo de cambio (Pesos MX por Dolar)";
      row.append(title);
      tblBody.appendChild(row);

      infoTipoCambio.map((item) => {
        let row = document.createElement("tr");

        let columnDate = document.createElement("td");
        columnDate.innerHTML = item.fecha;
        row.appendChild(columnDate);

        let columnTitle = document.createElement("td");
        columnTitle.innerHTML = item.dato;
        row.appendChild(columnTitle);

        tblBody.appendChild(row);
      });
      table.appendChild(tblBody);
      containerResult.appendChild(table);
    })
    .catch((error) => console.log("error", error));
});
