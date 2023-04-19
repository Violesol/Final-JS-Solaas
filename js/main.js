

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
const perfumes =[
    {nombre: "Miss Dior Blooming", marca: "Dior", familia: "Floral", notas:"Jazmín", estrellas:3},
    {nombre: "Mefisto", marca: "Xerjoff", familia: "Cítrico", notas:"Bergamota", estrellas:2},
    {nombre: "Gucci Guilty", marca: "Gucci", familia: "Amaderado", notas:"Cuero", estrellas:4},
    {nombre: "5th Avenue", marca: "Elizabeth Arden", familia: "Floral", notas:"Lila", estrellas:5},
    {nombre: "Light Blue", marca: "Dolce&Gabbana", familia: "Cítrico", notas:"Mandarina", estrellas:5},
]

function buscarPerfume (arr, filtro){
    const perfencontrado = arr.find((el) =>{
        return el.nombre.includes (filtro);   
})
return perfencontrado;
}

const btnBuscar=document.querySelector("#botonBuscar")
const input=document.querySelector("#filtro")

const usuarioMarca = document.querySelector("#opcion-usuario-marca")
const usuarioNotas = document.querySelector("#opcion-usuario-nota")
const usuarioAnio = document.querySelector("#opcion-usuario-anio")
const usuarioOrigen = document.querySelector("#opcion-usuario-pais")
const selectorMarca= document.querySelector("#marca")
const favoritoUsuario=document.querySelector("#favoritos")


input.addEventListener("input", ()=>{
    const encontrado=buscarPerfume(perfumes, input.value)
    console.log(encontrado);
})

const favoritos=[];
function guardarFiltro(){
    localStorage.setItem("Favoritos", JSON.stringify(favoritos))
}

btnBuscar.addEventListener("click",()=>{
    const encontrado=buscarPerfume(perfumes, input.value)
    favoritos.push(encontrado)
    guardarFiltro()
})

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
    saludoUsuario.innerHTML = "Campos requeridos";
    return; 
    }else{
        if(datos ==="sessionStorage"){
            sessionStorage.setItem("item", JSON.stringify(infoUsuario))    
        }
        if(datos ==="localStorage"){
            localStorage.setItem("item", JSON.stringify(infoUsuario))
        }
        saludoUsuario.innerHTML = "Hola " + infoUsuario.usuario;
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




