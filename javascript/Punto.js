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

    mover ()
    {
        this.#y += this.#vy;
        this.#x += this.#vx;
    }

    
    moverArriba ()
    {
        this.#y += - 10;
    }

    moverAbajo ()
    {
        this.#y += 10;
    }

    moverIzquierda ()
    {
        this.#x += - 10;
    }

    moverDerecha ()
    {
        this.#x += 10;
    }
}