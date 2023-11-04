let TDestapadas=0;
let movimiento=0;
let acierto=0;
let Targeta1=null,Targeta2=null;
let Primeresul=null,Segunresul=null;
let minutos=0,segundos=0;
let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
//numeros=numeros.sort(()=>{return Math.random()-0.5})
let temporizador=false,tiempo=null;
let inicio=false;
let nexLevel=null;
console.log(numeros);

document.getElementById(dibujarlogo(),"load");
nexLevel=document.getElementById("inicio");

function dibujarlogo(){
    for(i=0;i<=15;i++){
        document.getElementById(i).innerHTML=`<img src="./imagenes/tys.png " alt="">`;
    }
}

function comenzar(){ 
    if(inicio==false){
        mostrar()
        nexLevel.disabled=true
        setTimeout(()=>{inicio=true,
            nexLevel.innerHTML=`sigiente nivel`
        },5000);
    }
    else{
        window.location.href="consentracion2.html";
    }
}
    


function mostrar(){
    for(i=0;i<=15;i++){     
        document.getElementById(i).innerHTML=`<img src="./imagenes/${numeros[i]}.png " alt="">`;
    }
    setTimeout(()=>{
        for(i=0;i<=15;i++){
            document.getElementById(i).innerHTML=`<img src="./imagenes/tys.png " alt="">`;
        }
    },5000)
}

function destapar(id){
if(inicio){
    if(temporizador == false){
       tiempo= setInterval(()=>{
        
            segundos++;
            if(segundos>=60){
                segundos=0;
                minutos++
            }
            else if(minutos>=60){
                minutos=0;
            }
            document.getElementById("tiempo").innerHTML=`tiempo de juego   ${minutos}:${segundos}`;
        },1000);
        temporizador=true
    }

        TDestapadas++;
    if(TDestapadas==1){
        Targeta1=document.getElementById(id);
            Primeresul = numeros[id];
            Targeta1.innerHTML=`<img src="./imagenes/${Primeresul}.png " alt="">`


            Targeta1.disabled =true;
    }
    else if(TDestapadas==2){
        Targeta2=document.getElementById(id);
        Segunresul=numeros[id];
        Targeta2.innerHTML=`<img src="./imagenes/${Segunresul}.png " alt="">`;

        Targeta2.disabled=true;
 
        movimiento++
        document.getElementById("movimientos").innerHTML=`numero de movimientos: ${movimiento}`;
        if(Segunresul==Primeresul){
        TDestapadas=0;
        acierto++
        document.getElementById("aciertos").innerHTML=`numero de aciertos: ${acierto}`;
        if(acierto==8){
            clearInterval(tiempo);
            nexLevel.disabled=false;
        }
        }
        else{
            setTimeout(()=>{
                Targeta1.innerHTML=`<img src="./imagenes/tys.png " alt="">`;
                Targeta2.innerHTML=`<img src="./imagenes/tys.png " alt="">`;
                Targeta1.disabled=false;
                Targeta2.disabled=false;
                TDestapadas=0;
            },800);
            
        }
    }
 }
}
