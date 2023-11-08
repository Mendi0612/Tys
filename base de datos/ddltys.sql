create database TYS;
use TYS;

create table usuario(
nick_name varchar(50) primary key,
nombre varchar(40) not null,
edad int not null
);

create table puntaje(
Npuntaje bigint primary key
);

create table nivel(
nivel int auto_increment primary key,
id_nivel varchar(10) not null
);

create table usuario_puntaje(
nick_name varchar(50),
Npuntaje bigint primary key,
foreign key (nick_name) references usuario(nick_name),
foreign key (Npuntaje) references puntaje(Npuntaje)
);

create table usuario_nivel(
nick_name varchar(50),
nivel int auto_increment,
foreign key (nick_name) references usuario(nick_name),
foreign key (nivel) references nivel(nivel)
);


