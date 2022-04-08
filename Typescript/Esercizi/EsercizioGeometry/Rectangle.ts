import { Geometry } from "./Geometry";

class Rectangle {
    geometry: Geometry;
    base: number;
    height: number;
    
    constructor(base: number, height: number) {
        this.geometry = Geometry.RETTANGOLO;
        this.base = base;
        this.height = height;
    }

    getGeometry(): Geometry {
        return this.geometry;
    }
     
    getBase(): number {
        return this.base;
    }
    getHeight(): number {
        return this.height;
    }
}

export {Rectangle};