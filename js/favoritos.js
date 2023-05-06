

const perfumesFavoritos = JSON.parse(localStorage.getItem("productos-favoritos:"));

const contenedorPerfumes = document.querySelector("#contenedor-favoritos");


if (perfumesFavoritos){

    contenedorPerfumes.classList.remove("disabled");

    
    perfumesFavoritos.forEach(perfume => {
        const div = document.createElement("div");
        div.classList.add("perfume-favorito");
        div.innerHTML =`
        <img class="fav-foto-perfume" src="${perfume.imagen}" alt="${perfume.nombre}">
              <div class="detalles-perfume">
                  <h3 class="fav-nombre-perfume">${perfume.nombre}</h3>
                  <p class="fav-marca-perfume"><span class="bold">Marca:</span>${perfume.marca}</p>
                  <p class="fav-nota-perfume"><span class="bold">Notas:</span>${perfume.notas}</p>
                  <p class="fav-anio-perfume"><span class="bold">Año:</span>${perfume.anio}</p>
                  <p class="fav-pais-perfume"><span class="bold">Origen:</span>${perfume.pais}</p>  
                </div>`;

                contenedorPerfumes.append(div);

    })

}else {

}