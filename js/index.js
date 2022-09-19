let galaxiesArray = [];


const GALAXY_LINK = "https://images-api.nasa.gov/search?q=";


function showGalaxiesArray(galaxiesArray) {
    console.log(galaxiesArray);
    galaxiesArray.forEach(item => {
      const container = document.getElementById("contenedor");
      console.log("item", item);  
      container.innerHTML +=
        `<div class="col-sm-4">
        <div class="card">
        <img class="card-img-top" src="${item.links[0].href}" alt="${item.data[0].title}">
        <figcaption style="font-weight: bold;">Taken On: ${item.data[0].date_created}</figcaption>
        <div class="card-body">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            <h5 class="card-title">${item.data[0].title}</h5>
            <p class="card-text">${item.data[0].description}</p>
        </div>
        </div>
        </div>`;
    })

}

function showResults(input) {
  fetch(GALAXY_LINK + input)
    .then((res) => res.json())
    .then(function (resultObj) {
      //obtiene la info del json\
        console.log(resultObj);
        const items = resultObj.collection.items;
        showGalaxiesArray(items);
    });
}

function buscar() {
  const input = document.getElementById("inputBuscar");
  showResults(input.value);
}

document.addEventListener("DOMContentLoaded", function (e) {
    const btnBuscar = document.getElementById("btnBuscar");
    console.log('loaded');
  btnBuscar.addEventListener("click", buscar);
});