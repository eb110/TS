import { ICuboid } from "./ICube";

export class Cube implements ICuboid {
    constructor(public length: number) {}
    
    public get surfaceArea() {
      return this.length * this.length * 6;
    }
    
    public get volume() {
      return this.length * this.length * this.length;
    }
    
    public set surfaceArea(area: number) {
      this.length = Math.sqrt((area / 6));
    }
    
    public set volume(vol: number) { 
      this.length = Math.pow(vol, 1/3);
    }
  }