

const marcas = [
    "Dior",
    "Victoria's Secret",
    "Natura",
    "Jequiti",
    "Gucci",
    "Dolce&Gabbana",
    "Chanel",
]

const notas = [
    "Almizcle",
    "Vainilla",
    "Jazmín",
    "Bergamota",
    "Lavanda",
    "Cuero",
    "Pachuli",
    "Cedro",
]
const anios = [
    "2000",
    "2005",
    "2016",
    "2022",   
]

const paises = [
    "Brasil",
    "Francia",
    "Estados Unidos",
    "Italia",   
]

/*array productos*/

const perfumes =[
    {nombre: "Dior Homme Intense", marca: "Dior", notas:"Lavanda", pais:"Francia", imagen:"./img/01-perfume.jpg", anio: 2022},
    {nombre: "Miss Dior Blooming", marca: "Dior", notas:"Jazmín", pais:"Francia",imagen:"./img/02-perfume.jpg",anio: 2016},
    {nombre: "Mefisto", marca: "Xerjoff", notas:"Bergamota", pais:"Italia", imagen:"./img/03-perfume.jpg",anio: 2022},
    {nombre: "Gucci Guilty", marca: "Gucci", notas:"Cuero", pais:"Italia", imagen:"./img/04-perfume.jpg",anio: 2005},
    {nombre: "5th Avenue", marca: "Elizabeth Arden", notas:"Lila", pais:"Estados Unidos",imagen:"./img/05-perfume.jpg", anio: 2022},
    {nombre: "Light Blue", marca: "Dolce&Gabbana", notas:"Bergamota", pais:"Italia",imagen:"./img/06-perfume.jpg",anio: 2016},
    {nombre: "Libre", marca: "Yves Saint Laurent", notas:"Vainilla", pais:"Francia",imagen:"./img/07-perfume.jpg",anio: 2022},
    {nombre: "Coco Mademoiselle", marca: "Chanel", notas:"Vainilla", pais:"Francia",imagen:"./img/08-perfume.jpg",anio: 2005},
    {nombre: "Ekos Alma", marca: "Natura", notas:"Bergamota", pais:"Brasil",imagen:"./img/09-perfume.jpg",anio: 2016},
    {nombre: "Ilía", marca: "Natura", notas:"Jazmín", pais:"Brasil",imagen:"./img/10-perfume.jpg",anio: 2005},
    {nombre: "Bare", marca: "Victoria's Secret", notas:"Almizcle", pais:"Estados Unidos",imagen:"./img/11-perfume.jpg",anio: 2022},
    {nombre: "Tease", marca: "Victoria's Secret", notas:"Jazmín", pais:"Estados Unidos",imagen:"./img/12-perfume.jpg",anio: 2016},
];


const contenedorPerfumes = document.querySelector("#grilla-perfumes");

function cargarPerfumes(e){
    e.forEach(perfume => {
        const div = document.createElement("div");
        div.classList.add("perfume");
        div.innerHTML = `
        <img class="foto-perfume" src="${perfume.imagen}" alt="${perfume.nombre}">
        <div class="detalles-perfume">
            <h3 class="nombre-perfume">${perfume.nombre}</h3>
            <p class="marca-perfume">Marca: ${perfume.marca}</p>
            <p class="nota-perfume">Nota: ${perfume.notas}</p>
            <p class="anio-perfume">Año: ${perfume.anio}</p>
            <p class="pais-perfume">Origen: ${perfume.pais}</p>
            <button class="favorito-btn" id="${perfume.nombre}"><i class="bi bi-heart"></i>AGREGAR</button>
          </div>
        `;
        contenedorPerfumes.append(div);
        const botonFav = document.getElementById(`${perfume.nombre}`)
        botonFav.addEventListener("click", agregarAfav)

    })
}
cargarPerfumes(perfumes)


/*asincronia y promesas*/

card = document.querySelector(".card")
const favoritoBtn = document.querySelector(".favorito-btn")


function notificaFavoritos() {
    card.classList.add("mostrar")
    setTimeout(()=>{
        card.classList.remove ("mostrar")
    },2500)
    
} 

let perfumesFavoritos;
const perfumesFavoritosLS = JSON.parse(localStorage.getItem("productos-favoritos:"))
if(perfumesFavoritosLS){
    perfumesFavoritos = perfumesFavoritosLS;
}else{
    perfumesFavoritos = [];
}


function agregarAfav(e){
    const encontrado =perfumes.find(perf=>perf.nombre===e.target.id)
    console.log(encontrado);
    notificaFavoritos();
    
    perfumesFavoritos.push(encontrado);
    
    localStorage.setItem("productos-favoritos:", JSON.stringify(perfumesFavoritos));
}


const btnBuscar=document.querySelector("#botonBuscar")
const input=document.querySelector("#filtro")

const usuarioMarca = document.querySelector("#opcion-usuario-marca")
const usuarioNotas = document.querySelector("#opcion-usuario-nota")
const usuarioAnio = document.querySelector("#opcion-usuario-anio")
const usuarioOrigen = document.querySelector("#opcion-usuario-pais")
const selectorMarca= document.querySelector("#marca")
const favoritoUsuario=document.querySelector("#favoritos")


function buscarPerfume (arr, filtro){
    const perfencontrado = arr.find((el) =>{
    return el.nombre.includes(filtro);   
})
return perfencontrado;
} 

/*mostrar por pantalla resultado de búsqueda en input*/

input.addEventListener("keyup", e =>{
    if (e.target.matches("#filtro")){
        document.querySelectorAll(".perfume").forEach(perfume => {
            perfume.textContent.toLowerCase().includes(e.target.value)
            ? perfume.classList.remove("filtrado")
            : perfume.classList.add("filtrado")
        })
    }
})


btnBuscar.addEventListener("click",()=>{{
    const encontrado=buscarPerfume(perfumes, input.value)
    localStorage.setItem("Resultado", JSON.stringify(encontrado)) 
    }
})


/*selector de opciones*/

marcas.forEach((marca)=>{
    let option =document.createElement("option");
    option.value=marca
    option.innerText=marca;
    selectorMarca.appendChild(option);
})

selectorMarca.addEventListener("change", (e)=>{
    let option=selectorMarca.options[selectorMarca.selectedIndex].value;
    const marcaElegida= perfumes.filter(perfumes => perfumes.marca===e.currentTarget.id);
    cargarPerfumes(marcaElegida);
    usuarioMarca.innerHTML=`<p>Marca: ${option}</p>`    
})

const selectorNotas= document.querySelector("#nota")

notas.forEach((nota)=>{
    let option =document.createElement("option");
    option.value=nota
    option.innerText=nota;
    selectorNotas.appendChild(option);
})

selectorNotas.addEventListener("change", ()=>{
    let option=selectorNotas.options[selectorNotas.selectedIndex].value;
    usuarioNotas.innerHTML=`<p>Notas: ${option}</p>`    
})

const selectorAnio= document.querySelector("#anio")

anios.forEach((anio)=>{
    let option =document.createElement("option");
    option.value=anio
    option.innerText=anio;
    selectorAnio.appendChild(option);
})

selectorAnio.addEventListener("change", ()=>{
    let option=selectorAnio.options[selectorAnio.selectedIndex].value;
    usuarioAnio.innerHTML=`<p>Año: ${option}</p>`    
})

const selectorPais= document.querySelector("#origen")

paises.forEach((pais)=>{
    let option =document.createElement("option");
    option.value=pais
    option.innerText=pais;
    selectorPais.appendChild(option);
})
selectorPais.addEventListener("change", ()=>{
    let option=selectorPais.options[selectorPais.selectedIndex].value;
    usuarioOrigen.innerHTML=`<p>Origen: ${option}</p>`    
})

/*Signin*/

const formulario = document.querySelector("#login");
const inputUsuario=document.querySelector("#username");
const inputPass= document.querySelector("#userpass");
const check= document.querySelector("#check");
const btnIngreso=document.querySelector("#ingreso");
const saludoUsuario=document.querySelector("#saludo");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usuario = e.target[0].value;
    let pass = e.target[1].value;
})

/*Local Storage*/


function datosUsuario(datos){
    let infoUsuario={usuario:inputUsuario.value, pass:inputPass.value}

    if(infoUsuario.usuario==="" || infoUsuario.pass===""){
        Swal.fire({
            text: "Todos los campos son requeridos",
            icon: 'warning',
            confirmButtonColor: '#ec5757;',
            confirmButtonText: 'Ok'
          })
    return; 
    }else{
        if(datos ==="sessionStorage"){
            sessionStorage.setItem("item", JSON.stringify(infoUsuario))    
        }
        if(datos ==="localStorage"){
            localStorage.setItem("item", JSON.stringify(infoUsuario))
        }
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: '¡Bienvenido/a a Fragrantica\n ' + infoUsuario.usuario + " !"
          })
        saludoUsuario.innerHTML = infoUsuario.usuario;
        return infoUsuario;   
    }

}

btnIngreso.addEventListener("click",()=>{
    if (check.cheked) {
        datosUsuario("localStorage")    
    }else{
        datosUsuario("sessionStorage")
    }
})



/*seccion novedades*/

const perfusNuevos =[
    {nombre: "À Fleur de Pêche", imagen:"./img/novedad-01.jpg", anio: 2023},
    {nombre: "Íris",imagen:"./img/novedad-02.jpg",anio: 2023},
    {nombre: "Wonderland", imagen:"./img/novedad-03.jpg",anio: 2023},    
];

const areaNovedades = document.querySelector("#ver-novedades");
const slideNovedades = document.querySelector(".slide-novedades");



function cargarNovedades(nuevo){
    nuevo.forEach(novedad => {
        const div = document.createElement("div");
        div.classList.add("novedad");
        div.innerHTML = `
                    <img class="foto-perfu-nuevo" src=${novedad.imagen} alt="">
                    <div class="info-perfume">
                        <h3 class="nombre-perfume">${novedad.nombre}</h3>
                        <p class="anio-perfume">${novedad.anio}</p>
                    </div>
        `;
        areaNovedades.append(div);
    })
}
cargarNovedades(perfusNuevos)


/*INTENTO DE CARGAR X FETCH LA SECCION NOVEDADES*/

fetch("./novedades/ultimosingresos.json")
    .then((res) => res.json())
    .then (novedades=> {
    console.log(novedades);
    cargarNovedades(novedades);
})





