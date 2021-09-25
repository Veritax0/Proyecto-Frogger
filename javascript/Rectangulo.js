class Rectangulo extends Punto
{
    #ancho;
    #alto;
    #imagenRelleno;

    constructor(x,y,vx,vy,ancho,alto,imagenRelleno)
    {
        super(x,y,vx,vy);
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
    dibujar (ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.#imagenRelleno;
        ctx.fillRect(super.x,super.y,this.#ancho,this.#alto);
        ctx.strokeRect(super.x,super.y,this.#ancho,this.#alto);
        ctx.closePath();
    }

    dibujarCasa(ctx)
    {
        let img = new Image();
        img.src = "css/images/casa.png";
            ctx.drawImage(img,super.x,super.y);
            ctx.beginPath();
            ctx.fillStyle = img;
            ctx.fillRect(super.x,super.y,this.#ancho,this.#alto);
            ctx.strokeRect(super.x,super.y,this.#ancho,this.#alto);
            ctx.closePath();
    }
}