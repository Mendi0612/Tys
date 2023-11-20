
const formulario= document.querySelector("#formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const apodo=document.querySelector("#nickname").value;
    const nombre=document.querySelector("#nombre").value;
    const fechaNacimiento= document.querySelector("#fecha").value;
    console.log(apodo,nombre,fechaNacimiento);


});

const mysql = require("mysql");

conexion=mysql.createConnection({
    host:"localhost",
    database:"tys",
    user:"root",
    password:""
})