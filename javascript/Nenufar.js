class Nenufar extends Rectangulo
{
    constructor(x,y,ancho,alto,imagenRelleno)
    {
        super(x,y,ancho,alto,imagenRelleno);
    }

    mantenerJugador(jugador)
    {
        let = respuesta;
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