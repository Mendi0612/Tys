let mysql=require("mysql");

const formulario= document.querySelector("#formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const apodo=document.querySelector("#nickname").value;
    const nombre=document.querySelector("#nombre").value;
    const fechaNacimiento= document.querySelector("#fecha").value;
});
