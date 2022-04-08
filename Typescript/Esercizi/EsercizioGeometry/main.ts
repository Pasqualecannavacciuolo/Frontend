import { type } from './type';
import { Square } from './Square';
import { Rectangle } from './Rectangle';
import { Triangle } from './Triangle';

class main {
    
    square = new Square(2);
    rectangle = new Rectangle(2, 9);
    triangle = new Triangle(3, 3);
    
    tp = new type();

    public printSquare():void {
        console.log("Area quadrato: " + this.tp.squareArea(this.square));
    }

    public printRectangle():void {
        console.log(this.tp.rectangleArea(this.rectangle));
    }

    public printTriangle():void {
        console.log(this.tp.triangleArea(this.triangle));
    }
}