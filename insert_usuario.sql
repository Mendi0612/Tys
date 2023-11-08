CREATE PROCEDURE `insert_usuario` (
in nkname varchar(50),
in nom varchar(40),
in age int
)
BEGIN
	insert into usuario(nickname,nombre,edad)
    values(nkname,nom,age);
    select *from usuario;
END
