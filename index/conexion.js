require('./node_modules/mysql')

conexion=mysql.createConnection({
    host:"localhost",
    database:"tys",
    user:"root",
    password:""
})
function agregar(){
    let insertar=`INSERT INTO 'usuario2' ('nick_name', 'nombre', 'fec_nacimiento', 'nivel', 'Npuntaje') VALUES ('dsa', 'fs', '2004-06-06', '1', '0');`
    query(insertar);
}