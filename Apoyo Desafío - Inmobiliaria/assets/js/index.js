const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const propiedadesContainer = document.querySelector(".propiedades");
const searchButton = document.getElementById("search");
const cantidadSpan = document.getElementById("cantidad");

function updateTotalCount(count) {
  cantidadSpan.textContent = count;
}

function fillPropiedades(propiedades) {
  propiedadesContainer.innerHTML = "";
  updateTotalCount(propiedades.length);

  for (const propiedad of propiedades) {
    const propiedadCard = document.createElement("div");
    propiedadCard.classList.add("propiedad");

    const imagenDiv = document.createElement("div");
    imagenDiv.classList.add("img");
    imagenDiv.style.backgroundImage = `url(${propiedad.src})`;

    const propiedadInfo = document.createElement("section");
    const nombreParrafo = document.createElement("p");
    nombreParrafo.textContent = propiedad.name;
    const descripcionParrafo = document.createElement("p");
    descripcionParrafo.textContent = propiedad.description;
    const habitacionesParrafo = document.createElement("p");
    habitacionesParrafo.textContent = `Habitaciones: ${propiedad.rooms}`;
    const metrosParrafo = document.createElement("p");
    metrosParrafo.textContent = `Metros cuadrados: ${propiedad.m}`;

    propiedadInfo.appendChild(nombreParrafo);
    propiedadInfo.appendChild(descripcionParrafo);
    propiedadInfo.appendChild(habitacionesParrafo);
    propiedadInfo.appendChild(metrosParrafo);

    propiedadCard.appendChild(imagenDiv);
    propiedadCard.appendChild(propiedadInfo);

    propiedadesContainer.appendChild(propiedadCard);
  }
}

fillPropiedades(propiedadesJSON);

searchButton.addEventListener("click", () => {
  const minCuartos = parseInt(document.querySelector("#min-cuartos").value);
  const minMetros = parseInt(document.querySelector("#min-metros").value);
  const maxMetros = parseInt(document.querySelector("#max-metros").value);

  if (isNaN(minCuartos) || isNaN(minMetros) || isNaN(maxMetros)) {
    alert("Faltan campos por llenar");
    return;
  }

  const propiedadesFiltradas = propiedadesJSON.filter(
    (propiedad) =>
      propiedad.rooms >= minCuartos &&
      propiedad.m >= minMetros &&
      propiedad.m <= maxMetros
  );

  fillPropiedades(propiedadesFiltradas);
});