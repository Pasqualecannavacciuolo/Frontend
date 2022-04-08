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

class SimpleMath {

    public calcoloArea (o: Object, geometry: Geometry): number {
        let lato;
        let lato2;
        if(geometry == Geometry.QUADRATO) {
            let areaquadrato;
            lato = (<Square>o).getLato;
            areaquadrato = lato*lato;
            return areaquadrato;
        } else if(geometry == Geometry.RETTANGOLO) {
            let arearettangolo;
            lato = (<Rectangle>o).getBase;
            lato2 = (<Rectangle>o).getHeight;
            arearettangolo = lato*lato2;
            return arearettangolo;
        } else if(geometry == Geometry.TRIANGOLO) {
            let areareatriangolo;
            lato = (<Triangle>o).getBase;
            lato2 = (<Triangle>o).getHeight;
            areareatriangolo = lato*lato2/2;
            return areareatriangolo;
        }
    }

}

export {Square, Rectangle, Triangle, SimpleMath};