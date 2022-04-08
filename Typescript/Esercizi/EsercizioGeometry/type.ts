import { Square } from "./Square";
import { Rectangle } from "./Rectangle";
import { Triangle } from "./Triangle";


class type{
    
    width: number;
    height: number;


    constructor(){}


    public squareArea(square : Square) : number{
        this.width = square.getLato();
        return this.width*this.width;
    }

    public rectangleArea(rect : Rectangle) : number{
        this.width = rect.getBase();
        this.height = rect.getHeight();
        return this.width*this.height;
    }

    public triangleArea(tr : Triangle) : number{
        this.width = tr.getBase();
        this.height = tr.getHeight();
        return (this.width*this.height) /2;
    }

}
export {type}