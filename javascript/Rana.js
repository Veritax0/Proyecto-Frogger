class Rana extends Rectangulo
{
    #vidas;
    #posicionx
    #posiciony

    constructor(x,y,ancho,alto,imagenRelleno)
    {
        super(x,y,ancho,alto,imagenRelleno);
        this.#vidas = 3;
        this.#posicionx = 400;
        this.#posiciony = 790;
    }

    get vidas() 
    {
        return this.#vidas;
    }

    set vidas(value)
    {
        this.#vidas = value;
    }

    get posicionx()
    {
        return this.#posicionx;
    }

    set posicionx(value)
    {
        this.#posicionx = value;
    }

    get posiciony()
    {
        return this.#posiciony;
    }

    set posiciony(value)
    {
        this.#posiciony = value;
    }

    morir()
    {
        let = respuesta;
        if(this.#vidas > 0)
        {
            this.#vidas = this.#vidas - 1;
            respuesta = false;
        }

        else
        {
            respuesta = true
        }
    }

    juegocompletado()
    {
        let = respuesta;
        if ((this.#posicionx < 450)&&
            (this.#posicionx > 350)&&
            (this.#posiciony < 100))
        {
            respuesta = true;
        }
        else
        {
            respuesta = false;
        }
    }
}