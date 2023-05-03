

const marcas = [
    "Dior",
    "Victoria's Secret",
    "Natura",
    "Jequiti",
    "Guerlain",
    "Zara",
    "Avon",
]

const notas = [
    "Almizcle",
    "Vainilla",
    "Jazmín",
    "Bergamota",
    "Sándalo",
    "Ambar",
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
    {nombre: "Light Blue", marca: "Dolce&Gabbana", notas:"Mandarina", pais:"Italia",imagen:"./img/06-perfume.jpg",anio: 2016},
    {nombre: "Libre", marca: "Yves Saint Laurent", notas:"Vainilla", pais:"Francia",imagen:"./img/07-perfume.jpg",anio: 2022},
    {nombre: "Coco Mademoiselle", marca: "Chanel", notas:"Vainilla", pais:"Francia",imagen:"./img/08-perfume.jpg",anio: 2005},
    {nombre: "Ekos Alma", marca: "Natura", notas:"Bergamota", pais:"Brasil",imagen:"./img/09-perfume.jpg",anio: 2016},
    {nombre: "Ilía", marca: "Natura", notas:"Jazmín", pais:"Brasil",imagen:"./img/10-perfume.jpg",anio: 2005},
];


const contenedorPerfumes = document.querySelector("#grilla-perfumes");

function cargarPerfumes(perfumeElegido){
    perfumeElegido.forEach(perfume => {
        const div = document.createElement("div");
        div.classList.add("perfume");
        div.innerHTML = `
        <img class="foto-perfume" src="${perfume.imagen}" alt="${perfume.nombre}">
        <div class="detalles-perfume">
            <h3 class="nombre-perfume">${perfume.nombre}</h3>
            <p class="marca-perfume">${perfume.marca}</p>
            <p class="nota-perfume">${perfume.notas}</p>
            <p class="anio-perfume">${perfume.anio}</p>
            <p class="pais-perfume">${perfume.pais}</p>
            <button class="favorito-btn" id="${perfume.nombre}"><i class="bi bi-heart"></i>AGREGAR</button>
          </div>
        `;
        contenedorPerfumes.append(div);
    })
}
cargarPerfumes(perfumes)


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
    return el.nombre.includes (filtro);   
})
return perfencontrado;
} 

// input.addEventListener("input", (e)=>{
//     const encontrado = perfumes.filter(perfumes => perfumes.nombre ===e.currentTarget.filtro);
    
//     cargarPerfumes(encontrado);
// })

input.addEventListener("input", ()=>{
const encontrado=buscarPerfume(perfumes, input.value)
console.log(encontrado);
})


btnBuscar.addEventListener("click",()=>{
    const encontrado=buscarPerfume(perfumes, input.value)
    localStorage.setItem("Resultado", JSON.stringify(encontrado))
})



/*selector productos*/


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


/*asincronia y promesas*/

card = document.querySelector(".card")
const favoritoBtn = document.querySelector(".favorito-btn")


function notificaFavoritos() {
    favoritoBtn.addEventListener("click", () =>{
    card.classList.add("mostrar")
    setTimeout(()=>{
        card.classList.remove ("mostrar")
    },2500)
    
} )
}
notificaFavoritos();

/*ajax fetch*/

// fetch('./novedades/ultimosingresos.json')
//     .then((res) => res.json())
//     .then (novedades=> {
//     console.log(novedades);
//     cargarPerfumes(novedades)
// })

