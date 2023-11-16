var vp = document.getElementById("villa");
var papel =vp.getContext("2d");
var tecla=0;
var reto;
var val=true;
var indiceX = 0, indiceY = 0;
var indice_enemigoX = 0, indice_enemigoY = 0;
var personajeX = 380 ,personajeY = 410;
var ancho1=35,alto1=35;
var ancho2=43,alto2=48;
var anchoBandera=1,altoBandera=1;
var vidas=3;
var ganaste=0;
var fin =true;
var fint=true
let reinicio=0;
let boton;
let minutos=0,segundos=0;
let cronometro;
let monedas=1;
var imagen ={
  url: "imagenes/map.png",
  cargaOk: false
};
var personaje ={
  url: "imagenes/personaje.png",
  cargaOk:false
};
var teclas={
  UP:38,
  DOWN:40,
  RIGHT:39,
  LEFT:37,
  A:65,
  S:83,
  D:68,
  W:87

};

imagen.objeto = new Image();
imagen.objeto.src = imagen.url;
imagen.objeto.addEventListener("load", cargarFondo);

var ninja =new Image();
ninja.src="imagenes/ninjaNegro.png";


var calabera =new Image();
calabera.src="imagenes/calabera.png";

var minotauro =new Image();
minotauro.src="imagenes/minotauro.png";

var moneda=new Image();
moneda.src="imagenes/moneda.png";

var over  = new Image;
over.src="imagenes/over.png";

var win  = new Image;
win.src="imagenes/win.png";

var bandera = new Image();
bandera.src="imagenes/Bandera.png";

var corazon=new Image;
corazon.src="imagenes/corazon.png";

var a=new Image;
a.src="imagenes/A.png";

var d=new Image;
d.src="imagenes/D.png";

var s=new Image;
s.src="imagenes/S.png";

var w=new Image;
w.src="imagenes/W.png";

var fArriba=new Image;
fArriba.src="imagenes/flecha-arriba.png";

var fAbajo=new Image;
fAbajo.src="imagenes/flecha-abajo.png";

var fIzquierda=new Image;
fIzquierda.src="imagenes/tecla-izquierda.png";

var fDerecha=new Image;
fDerecha.src="imagenes/tecla-derecha.png";
boton=document.getElementById("boton");


personaje.objeto = new Image();
personaje.objeto.src=personaje.url;
personaje.objeto.addEventListener("load", tutorial());

function cargarFondo(){
  imagen.cargaOk= true;
  papel.drawImage(imagen.objeto,0,0,800,800);
}

function limites(){
  if(personajeX<60){
    personajeX=60;
  }
  else if (personajeX>752){
    personajeX=752;
  }
  else if (personajeY<0){
    personajeY=0;
  }
  else if (personajeY>690){
    personajeY=690;
  }
  else if(personajeY<410){
    if(personajeY>280)
    if(personajeX>310)
    if(personajeX<400)
      personajeX=310;
  }
  else if(personajeX>310){
    if(personajeX<450)
    if(personajeY>310)
    if(personajeY<420)
      personajeY=420;
  }


  if(personajeY>280)
  if(personajeY<410)
  if(personajeX>350)
  if(personajeX<450)
    personajeX=450;

  if(personajeX>310)
  if(personajeX<450)
  if(personajeY<400)
  if(personajeY>270)
      personajeY=270;
}

 

function dibujarobstaculos(){
    obstaculos(50,50,minotauro);
    obstaculos(400,50,calabera);
    obstaculos(181,100,calabera);
    obstaculos(0,488,calabera);
    obstaculos(230,755,calabera);
    obstaculos(400,500,minotauro);
    obstaculos(600,700,calabera);
    obstaculos(350,0,calabera);
    obstaculos(680,150,minotauro);
    obstaculos(700,500,calabera);
    obstaculos(250,350,ninja);
    obstaculos(350,170,calabera);
    obstaculos(550,175,minotauro);
    obstaculos(20,270,calabera);
    obstaculos(610,410,ninja);
    obstaculos(60,640,calabera);
    obstaculos(200,560,calabera);
    obstaculos(600,570,minotauro);
    obstaculos(200,240,ninja);
    obstaculos(140,410,calabera);
    obstaculos(320,630,calabera);
    obstaculos(500,470,calabera);
    obstaculos(470,80,minotauro);
    obstaculos(690,310,ninja);
    obstaculos(470,680,calabera);


    function obstaculos(CX,CY,enemigo){
      if(imagen.cargaOk)
      {
        if(CX>700)
        CX=700
        else if (CY>700)
        CY=700;
    
        papel.drawImage(enemigo,indice_enemigoX*47,indice_enemigoY*47,48,48,CX,CY,48,48);
    
        colicion(CX,CY);
        }
    } 

    function colicion(x,y){
      var x2= x,y2=y;
      if((x2<(personajeX+ancho1))&((x2+ancho2)>personajeX)){
        if(((y2+alto2)>personajeY)&(y2<(personajeY+alto1))){
          personajeX=380,personajeY=410,vidas=vidas-1;
        }
      }
    }

}

function vida(){
  var d=750;
  for(i=0;i<vidas;i++){
    papel.drawImage(corazon,d,0,40,40);
    d=d-40;
  }
  if(vidas==0){
    papel.drawImage(over,0,0,800,800),
    fin=false,
    boton.disabled=false,
    clearInterval(cronometro);
  }
}


function ganar(x,y){  
  var x2= x,y2=y;
  papel.drawImage(bandera,x2,y2,48,48);
  if((x2<(personajeX+ancho1))&((x2+anchoBandera)>personajeX))
    if(((y2+altoBandera)>personajeY)&(y2<(personajeY+alto1)))
      fin=false,
      papel.drawImage(win,0,0,800,800),
      boton.disabled=false,
      boton.innerHTML="nex level",
      clearInterval(cronometro);

}

function ganart(x,y){  
  var x2= x,y2=y;
  papel.drawImage(bandera,x2,y2,48,48);
  if((x2<(personajeX+ancho1))&((x2+anchoBandera)>personajeX))
    if(((y2+altoBandera)>personajeY)&(y2<(personajeY+alto1)))
      fint=false,
    personajeX=380,
    personajeY=420,
    dibujarjuego(),
    minutos=0,
    segundos=0,
    clearInterval(cronometro),
    document.getElementById("tiempo").innerHTML=`tiempo de juego 0:0`;
}

function random(){
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

function valor(){
  reto=random();
  switch(reto){
    case 1:
      teclas.UP,
      teclas.DOWN=teclas.S,
      teclas.RIGHT,
      teclas.LEFT=teclas.A
    break;
    case 2:
      teclas.UP=teclas.W,
      teclas.DOWN,
      teclas.RIGHT=teclas.D,
      teclas.LEFT
    break;
    case 3:
      teclas.UP=teclas.W,
      teclas.DOWN=teclas.S,
      teclas.RIGHT,
      teclas.LEFT
    break;
    case 4:
      teclas.UP,
      teclas.DOWN,
      teclas.RIGHT=teclas.D,
      teclas.LEFT=teclas.A
    break;
    case 5:
      teclas.UP,
      teclas.DOWN,
      teclas.RIGHT,
      teclas.LEFT
    break;
    case 6:
      teclas.UP=teclas.W,
      teclas.DOWN=teclas.S,
      teclas.RIGHT=teclas.D,
      teclas.LEFT=teclas.A
    break;
  }
}

document.onkeydown=function(event){
  tecla=event.keyCode;
  switch (tecla) {
    case teclas.DOWN:
      personajeY=personajeY+10;
      indiceY=0;
    break;
    case teclas.LEFT:
      personajeX=personajeX-10;
      indiceY=1;
    break;
    case teclas.UP:
      personajeY=personajeY-10;
      indiceY=3;
    break;
    case teclas.RIGHT:
      personajeX=personajeX+10;
      indiceY=2;
    break;
    
}
}

function dibujarReglas(){
  if(tecla==0){
    papel.fillText(`para ir abajo oprima la tecla `,90,120);
    dTecla(teclas.DOWN,500,90)
  }
  else if(tecla==teclas.DOWN){
    papel.fillText("para ir arriba oprima la tecla ",90,120);
    dTecla(teclas.UP,500,90);
  }
  else if(tecla==teclas.UP){
    papel.fillText("para ir derecha oprima la tecla ",90,120);
    dTecla(teclas.RIGHT,530,90)
  }
  else if(tecla==teclas.RIGHT){
    papel.fillText("para ir izquierda oprima la tecla ",90,120);
    dTecla(teclas.LEFT,550,90)
  }
  else{
    tecla=0;
  }
}
function dTecla(T,x,y){
  if(T==39){
    papel.drawImage(fDerecha,x,y,50,50);
  }
  else if(T==37){
    papel.drawImage(fIzquierda,x,y,50,50);
  }
  else if(T==38){
    papel.drawImage(fArriba,x,y,50,50);
  }
  else if(T==40){
    papel.drawImage(fAbajo,x,y,50,50);
  }
  else if(T==65){
    papel.drawImage(a,x,y,50,50);
  } else if(T==83){
    papel.drawImage(s,x,y,50,50);
  }
  else if(T==68){
    papel.drawImage(d,x,y,50,50);
  }
  else if(T==87){
    papel.drawImage(w,x,y,50,50);
  }

  return;
}
function DibujarMonedas(){
    if(monedas==0)
      monedita(640,80)
    else if(monedas==1)
      monedita(130,670)
    else if(monedas==2)
      monedita(690,680)
    /*else if(monedas==3)
      monedita(120,60)
    else if(monedas==4)
      monedita(450,350)
    else if(monedas==5)
      monedita(300,350)
    else if(monedas==6)
      monedita(380,270)
    else if(monedas==7)
      monedita(700,400)
    else if(monedas==8)
      monedita(60,360)*/
    function monedita(x,y){
      papel.drawImage(moneda,x,y,50,50)
      cogerMoneda(x,y)
    }
    function cogerMoneda(x,y){
      var x2= x,y2=y;
      if((x2<(personajeX+ancho1))&((x2+ancho2)>personajeX)){
        if(((y2+alto2)>personajeY)&(y2<(personajeY+alto1))){
          monedas++;
          document.getElementById("monedas").innerHTML=`numero de monedas: ${monedas}`
        }
      }
    }
}


function tutorial(){
  personaje.cargaOk=true;
  cargarFondo();
  if(val){
    tiempo();
    valor();
    boton.disabled=true;
    val=false;
  }
  papel.drawImage(personaje.objeto,indiceX*48,indiceY*48,48,48,personajeX,personajeY,48,48);
  indiceX=indiceX+1;
  papel.font='italic bold 25pt Time New Roma';
  dibujarReglas();
  if(indiceX>2){
    indiceX=0;
  }
  limites();
  ganart(700,700);
  if(fint){
  setTimeout("tutorial();",100);
  }
  else{
  val=true;
  }
}

function dibujarjuego(){
  personaje.cargaOk=true;
  cargarFondo();
  papel.drawImage(personaje.objeto,indiceX*48,indiceY*48,48,48,personajeX,personajeY,48,48);
  indiceX=indiceX+1;
  if(indiceX>2)
      indiceX=0;
  limites();
  if(val){
    tiempo();
    val=false
  }
  if(ganaste<=2){
    dibujarobstaculos(),
    DibujarMonedas();
    indice_enemigoX=indice_enemigoX+1
    if(indiceX<1)
      indice_enemigoX=0;
    vida();
    if(vidas!=0){
      if(monedas==3){
        ganar(700,700);
      }
    }
  }
  if(fin){
    setTimeout("dibujarjuego();",100);
  }
}

function oprmir(){
  if(vidas==0){
    reinicio++;
    boton.disabled=true;
    vidas=3;
    personajeX=380;
    personajeY=410;
    fin=true;
    monedas=0;
    segundos=0;
    minutos=0;
    document.getElementById("tiempo").innerHTML=`tiempo de juego 0:0`;
    document.getElementById("monedas").innerHTML=`numero de monedas: 0`
    val=true;
    dibujarjuego();
  }
  else{
    window.location.href="../level%202/consentracion.html"
  }
}

function tiempo(){
  cronometro=setInterval(()=>{
    segundos++;
    if(segundos==60){
        segundos=0;
        minutos++
      }
      else if(minutos>=60){
        minutos=0;
      }
    document.getElementById("tiempo").innerHTML=`tiempo de juego ${minutos}:${segundos}`;
  },1000);
}