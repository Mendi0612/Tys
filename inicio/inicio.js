const mysql=require("mysql");

let conexion = mysql.createConnection(
    {
        host: "localhost",
        database: "TYS",
        user: "root",
        password: ""
    }
);

conexion.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log("exitosa");
    }

})

const formulario= document.querySelector("#formulario");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const apodo=document.querySelector("#nickname").value;
    const nombre=document.querySelector("#nombre").value;
    const fechaNacimiento= document.querySelector("#fecha").value;
});


