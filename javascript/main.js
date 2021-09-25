window.addEventListener("load", main);



function main()
{

let miCanvas = document.getElementById("miCanvas");
let ctx = miCanvas.getContext("2d");
let w = miCanvas.clientWidth;
let h = miCanvas.clientHeight;
let body = document.getElementById("body");
let ranita = new Rana(250,550,50,50,"red");
let carros = new Array();
let lilypads = new Array();
window.requestAnimationFrame(animar);
body.addEventListener("keydown",mover);
carros1();
carros2();
carros3();
carros4();
lilypad();
let intervalo1 = randomNum(1000,3000);
let intervalo2 = randomNum(1000,3000);
let intervalo3 = randomNum(1000,3000);
let intervalo4 = randomNum(1000,3000);
let intervalo5 = randomNum(1000,3000);
let intervalo6 = randomNum(1000,3000);
let intervalo7 = randomNum(1000,3000);
let intervalo8 = randomNum(1000,3000);
setInterval(carros1,intervalo1);
setInterval(carros2,intervalo2);
setInterval(carros3,intervalo3);
setInterval(carros4,intervalo4);
setInterval(carros5,intervalo5);
setInterval(carros6,intervalo6);
setInterval(carros7,intervalo7);
setInterval(carros8,intervalo8);

function colisiones()
{
    for (let i = 0; i < carros.length; i++)
    {
        carros[i].limiteIzq;
        carros[i].limiteDer;
        carros[i].limiteArriba;
        carros[i].limiteAbajo;
        ranita.limiteIzq;
        ranita.limiteDer;
        ranita.limiteArriba;
        ranita.limiteAbajo;

        if((carros[i].limiteIzq    < ranita.limiteDer) &&
        (carros[i].limiteDer    > ranita.limiteIzq) &&
        (carros[i].limiteArriba < ranita.limiteAbajo) &&  
        (carros[i].limiteAbajo  > ranita.limiteArriba))
        {
            alert('colision');
        }
    }
}

function ganar()
{
    if(ranita.juegoCompletado())
    {
        alert("Juego Completado");
    }
}

function mostrarRana()
{
    ranita.dibujarRana(ctx);
}

function lilypad()
{
    lilypads.push(new Nenufar(55,55,0,0,40,40,"darkgreen"));
    lilypads.push(new Nenufar(155,55,0,0,40,40,"darkgreen"));
    lilypads.push(new Nenufar(255,55,0,0,40,40,"darkgreen"));
    lilypads.push(new Nenufar(355,55,0,0,40,40,"darkgreen"));
    lilypads.push(new Nenufar(455,55,0,0,40,40,"darkgreen"));
    lilypads.push(new Nenufar(555,55,0,0,40,40,"darkgreen"));
}

function carros1()
{
    let dx = randomNum(3,5);
    carros.push(new Carro(0,355,dx,0,100,40,"black"));
}

function carros2()
{
    let dx = randomNum(3,7);
    carros.push(new Carro(0,405,dx,0,100,40,"darkgreen"));
}

function carros3()
{
    let dx = randomNum(3,5);
    carros.push(new Carro(0,455,dx,0,100,40,"black"));
}

function carros4()
{
    let dx = randomNum(3,5);
    carros.push(new Carro(0,505,dx,0,100,40,"brown"));
}

function carros5()
{
    let dx = randomNum(5,8);
    carros.push(new Carro(0,105,dx,0,100,40,"blue"));
}

function carros6()
{
    let dx = randomNum(5,8);
    carros.push(new Carro(0,155,dx,0,100,40,"purple"));
}

function carros7()
{
    let dx = randomNum(5,8);
    carros.push(new Carro(0,205,dx,0,100,40,"brown"));
}

function carros8()
{
    let dx = randomNum(5,8);
    carros.push(new Carro(0,255,dx,0,100,40,"white"));
}

function animar()
{
    ctx.clearRect(0,0,w,h);
    for (let i = 0; i < carros.length; i++) 
        {
            carros[i].animar();                   
        }
    for (let i = 0; i < carros.length; i++) 
        {
            carros[i].dibujar(ctx);                   
        }
    for (let i = 0; i < lilypads.length; i++) 
        {
            lilypads[i].dibujar(ctx);                   
        }
    document.getElementById("vidas").value = ranita.vidas;
    mostrarRana();
    colisiones();
    window.requestAnimationFrame(animar);
}

function mover(e)
    {
        switch(e.key)
        {
            case "ArrowUp" : 
                ranita.moverArriba();      
                break;

            case "ArrowDown" : 
                ranita.moverAbajo();    
                break;

            case "ArrowRight" :
                ranita.moverDerecha();
                break;

            case "ArrowLeft" :
                ranita.moverIzquierda();
                break;
        }
    }

function randomNum(min,max)
    {
        let n1;
        let n2;
        n1 = Math.random();
        n2 = Math.floor((n1 * (max - min) + min));
        return n2;
    }

}