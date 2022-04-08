import { Geometry } from "./Geometry";

class Square {
    geometry: Geometry;
    lato: number;
    
    constructor(lato: number) {
        this.geometry = Geometry.QUADRATO;
        this.lato = lato;
    }

    getGeometry(): Geometry {
        return this.geometry;
    }
     
    getLato(): number {
        return this.lato;
    }
}

export {Square};