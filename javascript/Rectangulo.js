class Rectangulo extends Punto
{
    #ancho;
    #alto;
    #imagenRelleno;

    constructor(x,y,ancho,alto,imagenRelleno)
    {
        super(x,y);
        this.#ancho = ancho;
        this.#alto = alto;
        this.#imagenRelleno = imagenRelleno;
    }

    get limiteIzq ()
    {
        return super.x;
    }
    get limiteDer ()
    {
        return super.x + this.#ancho;
    }
    get limiteArriba()
    {
        return super.y;
    }
    get limiteAbajo()
    {
        return super.y + this.#alto;
    }

    get ancho()
    {
        return this.#ancho;
    }

    get alto()
    {
        return this.#alto;
    }

    get imagenRelleno()
    {
        return this.#imagenRelleno;
    }

    set imagenRelleno (value)
    {
        this.#imagenRelleno = value;
    }

    colisionar(rectangulo2)
    {
        let respuesta;

        if ((this.limiteIzq    < rectangulo2.limiteDer) &&
            (this.limiteDer    > rectangulo2.limiteIzq) &&
            (this.limiteArriba < rectangulo2.limiteAbajo) &&  
            (this.limiteAbajo  > rectangulo2.limiteArriba))

        {
            respuesta = true;
        }
        else
        {
            respuesta = false;
        }
        return respuesta;
    }
}