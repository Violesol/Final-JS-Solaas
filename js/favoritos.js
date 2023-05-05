const perfumesFavoritos = JSON.parse(localStorage.getItem("productos-favoritos:"))

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
                  <p class="fav-marca-perfume">${perfume.marca}</p>
                  <p class="fav-nota-perfume">${perfume.notas}</p>
                  <p class="fav-anio-perfume">${perfume.anio}</p>
                  <p class="fav-pais-perfume">${perfume.pais}</p>  
                </div>`;

                contenedorPerfumes.append(div);

    })

}else {

}