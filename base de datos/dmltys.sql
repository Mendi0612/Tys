use TYS;

insert into usuario values("darismendi0612","diego",19),
("lrincohe09","laura",22),
("gissaragon","gissell",18),
("joelin4","joel",4),
("margaritamh","margarita",59),
("jjulianr","julian",62);

insert into puntaje values(1000),
(2000),
(3000),
(4000),
(5000),
(6000);

insert into nivel(id_nivel) values
("nivel 1"),
("nivel 2"),
("nivel 3");

insert into usuario_puntaje values
("darismendi0612",1000),
("lrincohe09",3000),
("gissaragon",4000),
("joelin4",2000),
("margaritamh",6000),
("jjulianr",5000);

insert into usuario_nivel values
("darismendi0612",1),
("lrincohe09",2),
("gissaragon",3),
("joelin4",2),
("margaritamh",3),
("jjulianr",1); 

select * from usuario;
select * from puntaje;
select * from nivel;
select * from usuario_puntaje;
select * from usuario_nivel;
select * from usuario where edad=19;
select * from usuario_nivel where id_nivel="nivel 2";
select * from nivel where nivel between 1 and 2;
select * from usuario_nivel where id_nivel!="nivel 2";
