import { Geometry } from "./Geometry";

class Triangle {
    geometry: Geometry;
    base: number;
    height: number;
    
    constructor(base: number, height: number) {
        this.geometry = Geometry.TRIANGOLO;
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

export {Triangle};