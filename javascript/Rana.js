class Rana extends Rectangulo
{
    #vidas;
    #posicionx
    #posiciony

    constructor(x,y,ancho,alto)
    {
        super(x,y,ancho,alto);
        this.#vidas = 3;
        this.#posicionx = super.x;
        this.#posiciony = super.y;
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
        img.src = "css/images/ranita.png";
            ctx.drawImage(img,super.x,super.y);
            ctx.beginPath();
            ctx.fillStyle = img;
            ctx.fillRect(super.x,super.y,super.ancho,super.alto);
            ctx.strokeRect(super.x,super.y,super.ancho,super.alto);
            ctx.closePath();
        
    }

    morir()
    {
        if(this.#vidas > 1)
        {
            this.#vidas = this.#vidas - 1;
            super.x = 250;
            super.y = 550;
            window.alert("Se ha perdido una vida")
        }

        else
        {
            super.x = 250;
            super.y = 550;
            window.alert("Game Over")
            location.reload();
        }
    }

    juegoCompletado()
    {
            super.x = 250;
            super.y = 550;
            window.alert("Juego Completado")
            location.reload();
    }
}