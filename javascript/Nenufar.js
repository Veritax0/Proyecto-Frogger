class Nenufar extends Rectangulo
{
    constructor(x,y,vx,vy,ancho,alto,imagenRelleno)
    {
        super(x,y,vx,vy,ancho,alto,imagenRelleno);
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