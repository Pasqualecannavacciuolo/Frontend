import { Geometry } from "./Geometry";

class SimpleMath {
    Square = class {
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
}