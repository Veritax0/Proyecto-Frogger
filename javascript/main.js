let miCanvas = document.getElementById("miCanvas");
let ctx = miCanvas.getContext("2d");
let w = miCanvas.clientWidth;
let h = miCanvas.clientHeight;
let body = document.getElementById("body");
let ranita = new Rana(250,550,50,50,"red");
let carros = new Array();
let lilypads = new Array();
body.addEventListener("keydown", mover);
window.requestAnimationFrame(animar);
carros1();
carros2();
carros3();
carros4();
lilypad();
let intervalo1 = randomNum(1000,3000);
let intervalo2 = randomNum(1000,3000);
let intervalo3 = randomNum(1000,3000);
let intervalo4 = randomNum(1000,3000);

setInterval(carros1,intervalo1);
setInterval(carros2,intervalo2);
setInterval(carros3,intervalo3);
setInterval(carros4,intervalo4);

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
    let dx = randomNum(4,9);
    carros.push(new Carro(0,355,dx,0,100,40,"black"));
}

function carros2()
{
    let dx = randomNum(4,9);
    carros.push(new Carro(0,405,dx,0,100,40,"darkgreen"));
}

function carros3()
{
    let dx = randomNum(4,9);
    carros.push(new Carro(0,455,dx,0,100,40,"black"));
}

function carros4()
{
    let dx = randomNum(4,9);
    carros.push(new Carro(0,505,dx,0,100,40,"brown"));
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
    mostrarRana();
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