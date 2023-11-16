
const formulario= document.querySelector("#formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const apodo=document.querySelector("#nickname").value;
    const nombre=document.querySelector("#nombre").value;
    const fechaNacimiento= document.querySelector("#fecha").value;
    console.log(apodo,nombre,fechaNacimiento);
});

function cs(){
    window.location.href="file:///C:/Users/ACER/Desktop/tys/level%201/villa.html";
}