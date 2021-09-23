let miCanvas = document.getElementById("miCanvas");
let ctx = miCanvas.getContext("2d");
let w = miCanvas.clientWidth;
let h = miCanvas.clientHeight;
let body = document.getElementById("body");
let ranita = new Rana(250,550,50,50,"red");
let carros = new Array();
ranita.dibujar(ctx);
body.addEventListener("keydown", mover);

function mover(e)
    {
        ctx.clearRect(0,0,w,h);
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
        ranita.dibujar(ctx);
    }

function randomNum(min,max)
    {
        let n1;
        let n2;
        n1 = Math.random();
        n2 = Math.floor((n1 * (max - min) + min));
        return n2;
    }