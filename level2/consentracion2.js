let Tdestapada=0;
let Tarjeta1=null, Tarjeta2=null;
let PrimerResul=null,SegundoResul=null;
let aciertos=null,movimientos=null;
temporizador=true,tiempo=null;
let segundos=0,minutos=0;
let inicio =false;
let nexLevel;
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
numeros.sort(()=>{return Math.random()-0.5})

document.getElementById(dibujarlogo(),"load")




nexLevel=document.getElementById("inicio");
function dibujarlogo(){
    for(i=0;i<=35;i++){
        document.getElementById(i).innerHTML=`<img src="./imagenes/Tys.png" alt="">`;
    }
}


 function mostrar(){
    for(i=0;i<=35;i++){     
        document.getElementById(i).innerHTML=`<img src="./imagenes2/${numeros[i]}.png " alt="">`;

    }
    setTimeout(()=>{
        for(i=0;i<=35;i++){

            document.getElementById(i).innerHTML=`<img src="./imagenes/Tys.png " alt="">`;
        }
    },5000)
}

function comenzar(){ 
    mostrar()
    setTimeout(()=>{inicio=true,
    nexLevel.disabled=true,
    nexLevel.innerHTML=`sigiente nivel`
},5000);
}


function precionar(id){
if(inicio){
Tdestapada++;
    if(temporizador){
        tiempo =setInterval(()=>{
            segundos++
            if(segundos>=60){
                segundos=0;
                minutos++

            }
        document.getElementById("tiempo").innerHTML=`tiempo de juego ${minutos}:${segundos}`;
        },1000)
        temporizador=false;
    }
    

    if(Tdestapada==1){
        Tarjeta1=document.getElementById(id);
        PrimerResul=numeros[id]
        Tarjeta1.innerHTML=`<img src="./imagenes2/${PrimerResul}.png" alt="">`;;

        Tarjeta1.disabled=true;
    }
    else if(Tdestapada==2){
        movimientos++;
        document.getElementById("movimientos").innerHTML=`numero de movimientos: ${movimientos}`;
        Tarjeta2=document.getElementById(id);
        SegundoResul=numeros[id]
        Tarjeta2.innerHTML=`<img src="./imagenes2/${SegundoResul}.png" alt="">`;

        Tarjeta2.disabled=true;

        if(PrimerResul==SegundoResul){
            aciertos++
            document.getElementById("aciertos").innerHTML=`numero de aciertos: ${aciertos}`;
            Tdestapada=0;

            if(aciertos==18){
                clearInterval(tiempo);
                nexLevel.disabled=false;
            }

        }
        else{
            setTimeout(()=>{
                Tarjeta1.innerHTML=`<img src="./imagenes/Tys.png " alt="">`;
                Tarjeta2.innerHTML=`<img src="./imagenes/Tys.png " alt="">`;
                Tarjeta1.disabled=false;
                Tarjeta2.disabled=false;
                Tdestapada=0;
            },800)
            

        }

        
        }


    }
}