


const marcas = [
    "Dior",
    "Victoria's Secret",
    "Natura",
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
]

const anios = [
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
    {nombre: "Dior Homme Intense", marca: "Dior", notas:"Lavanda", pais:"Francia", imagen:"./img/01-perfume.jpg", anio: "2022"},
    {nombre: "Miss Dior Blooming", marca: "Dior", notas:"Jazmín", pais:"Francia",imagen:"./img/02-perfume.jpg",anio: "2016"},
    {nombre: "Mefisto", marca: "Xerjoff", notas:"Bergamota", pais:"Italia", imagen:"./img/03-perfume.jpg",anio: "2022"},
    {nombre: "Gucci Guilty", marca: "Gucci", notas:"Cuero", pais:"Italia", imagen:"./img/04-perfume.jpg",anio: "2005"},
    {nombre: "5th Avenue", marca: "Elizabeth Arden", notas:"Lila", pais:"Estados Unidos",imagen:"./img/05-perfume.jpg", anio: "2022"},
    {nombre: "Light Blue", marca: "Dolce&Gabbana", notas:"Bergamota", pais:"Italia",imagen:"./img/06-perfume.jpg",anio: "2016"},
    {nombre: "Libre", marca: "Yves Saint Laurent", notas:"Vainilla", pais:"Francia",imagen:"./img/07-perfume.jpg",anio: "2022"},
    {nombre: "Coco Mademoiselle", marca: "Chanel", notas:"Vainilla", pais:"Francia",imagen:"./img/08-perfume.jpg",anio: "2005"},
    {nombre: "Ekos Alma", marca: "Natura", notas:"Bergamota", pais:"Brasil",imagen:"./img/09-perfume.jpg",anio: "2016"},
    {nombre: "Ilía", marca: "Natura", notas:"Jazmín", pais:"Brasil",imagen:"./img/10-perfume.jpg",anio: "2005"},
    {nombre: "Bare", marca: "Victoria's Secret", notas:"Almizcle", pais:"Estados Unidos",imagen:"./img/11-perfume.jpg",anio: "2022"},
    {nombre: "Tease", marca: "Victoria's Secret", notas:"Jazmín", pais:"Estados Unidos",imagen:"./img/12-perfume.jpg",anio: "2016"},
];


const contenedorPerfumes = document.querySelector("#grilla-perfumes");

function cargarPerfumes(e){
    contenedorPerfumes.innerHTML=""
    e.forEach(perfume => {
        const div = document.createElement("div");
        div.classList.add("perfume");
        div.innerHTML = `
        <img class="foto-perfume" src="${perfume.imagen}" alt="${perfume.nombre}">
        <div class="detalles-perfume">
            <h3 class="nombre-perfume">${perfume.nombre}</h3>
            <p class="marca-perfume"><span class="bold">Marca:</span> ${perfume.marca}</p>
            <p class="nota-perfume"><span class="bold">Nota:</span> ${perfume.notas}</p>
            <p class="anio-perfume"><span class="bold">Año:</span> ${perfume.anio}</p>
            <p class="pais-perfume"><span class="bold">Origen:</span> ${perfume.pais}</p>
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


/*SELECTOR DE OPCIONES*/

/*selector de marca*/

const selectorMarca= document.querySelector("#marca")

marcas.forEach((marca)=>{
    let option =document.createElement("option");
    option.value=marca
    option.innerText=marca;
    selectorMarca.appendChild(option);
})

selectorMarca.addEventListener("change", ()=>{
    let option=selectorMarca.options[selectorMarca.selectedIndex].value; 
    usuarioMarca.innerHTML=`<p>Marca: ${option}</p>`       
})

const filtroMarca = document.getElementById("marca")

filtroMarca.addEventListener("change", (e) =>{
    const marca =e.target.value;
    const perfumesFiltrados = perfumes.filter(perfume => perfume.marca === marca)
    cargarPerfumes(perfumesFiltrados)
})

/*selector de notas*/

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

const filtroNota = document.getElementById("nota")

filtroNota.addEventListener("change", (e) =>{
    const nota =e.target.value;
    const perfumesFiltrados = perfumes.filter(perfume => perfume.notas === nota)
    cargarPerfumes(perfumesFiltrados)
})


/*selector de año*/

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

const filtroAnio = document.getElementById("anio")

filtroAnio.addEventListener("change", (e) =>{
    const anio =e.target.value;
    const perfumesFiltrados = perfumes.filter(perfume => perfume.anio === anio)
    cargarPerfumes(perfumesFiltrados)
})


/*selector de origen*/


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

const filtroOrigen = document.getElementById("origen")

filtroOrigen.addEventListener("change", (e) =>{
    const origen =e.target.value;
    const perfumesFiltrados = perfumes.filter(perfume => perfume.pais === origen)
    cargarPerfumes(perfumesFiltrados)
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
            position: 'top',
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
        saludoUsuario.innerHTML = infoUsuario.usuario +
        `<svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z" stroke="#5c5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#5c5c5c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
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


/*ajax y fetch*/

fetch("./novedades/ultimosingresos.json")
    .then((res) => res.json())
    .then (novedades=> {
    cargarNovedades(novedades);
})





