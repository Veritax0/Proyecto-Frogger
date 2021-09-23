class Punto
{
    #x;
    #y;
    #vx;
    #vy;

    constructor(x,y,vx,vy)
    {
        this.#x = x;
        this.#y = y;
        this.#vx = vx;
        this.#vy = vy;
    }

    get x ()
    {
        return this.#x;
    }

    set x (value)
    {
        this.#x = value
    }

    get y ()
    {
        return this.#y;
    }

    set y (value)
    {
        this.#y = value;
    }

    get vx ()
    {
        return this.#vx;
    }

    set vx (value)
    {
        this.#vx = value;
    }

    get vy ()
    {
        return this.#vy;
    }

    set vy (value)
    {
        this.#vy = value;
    }

    animar ()
    {
        this.#y += this.#vy;
        this.#x += this.#vx;
    }

    
    moverArriba ()
    {
        this.#y += - 50;
    }

    moverAbajo ()
    {
        this.#y += 50;
    }

    moverIzquierda ()
    {
        this.#x += - 50;
    }

    moverDerecha ()
    {
        this.#x += 50;
    }
}