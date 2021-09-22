let miCanvas = document.getElementById("miCanvas");
let ctx = miCanvas.getContext("2d");

ranad = new Image();
ranad.src = "images/ranita.png";
let relleno
ranad.onload = function()
{
    relleno = ctx.createPattern(ranad,"repeat");
}
let ranita = new Rana(250,550,50,50,relleno);
ranita.dibujar(ctx);