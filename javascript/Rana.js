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

    dibujarRana(ctx)
    {
        let img = new Image();
        img.src = "images/ranita.png";
            ctx.drawImage(img,super.x,super.y);
            ctx.beginPath();
            ctx.fillStyle = img;
            ctx.fillRect(super.x,super.y,super.ancho,super.alto);
            ctx.strokeRect(super.x,super.y,super.ancho,super.alto);
            ctx.closePath();
        
    }

    morir()
    {
        if(this.#vidas > 0)
        {
            this.#vidas = this.#vidas - 1;
        }

        else
        {
            window.alert("Game Over")
            location.reload();
        }
    }

    juegocompletado()
    {
        let respuesta;
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