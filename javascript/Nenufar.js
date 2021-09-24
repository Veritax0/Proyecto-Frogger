class Nenufar extends Rectangulo
{
    constructor(x,y,vx,vy,ancho,alto,imagenRelleno)
    {
        super(x,y,vx,vy,ancho,alto,imagenRelleno);
    }

    dibujarNenufar(ctx)
    {
        let img = new Image();
        img.src = "css/images/nenufar.png";
            ctx.drawImage(img,super.x,super.y);
            ctx.beginPath();
            ctx.fillStyle = img;
            ctx.fillRect(super.x,super.y,super.ancho,super.alto);
            ctx.strokeRect(super.x,super.y,super.ancho,super.alto);
            ctx.closePath();
        
    }

    mantenerJugador(jugador)
    {
        let respuesta;
        if(this.colisionar(jugador))
        {
            respuesta = true;
        }
        else
        {
            respuesta = false;
        }
    }
}