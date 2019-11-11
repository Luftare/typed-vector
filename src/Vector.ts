export interface IVector {
  x: number;
  y: number;
}

export default class Vector implements IVector {
  public x: number = 0;
  public y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(...vectors: IVector[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: IVector) => {
      result.x += x;
      result.y += y;
      return result;
    }, this);
  }

  public addX(x: number): Vector {
    this.x += x;
    return this;
  }

  public addY(y: number): Vector {
    this.y += y;
    return this;
  }

  public subtract(...vectors: IVector[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: IVector) => {
      result.x -= x;
      result.y -= y;
      return result;
    }, this);
  }

  public scale(s: number): Vector {
    this.x *= s;
    this.y *= s;
    return this;
  }

  public scaledAdd(s: number, ...vectors: IVector[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: IVector) => {
      result.x += x * s;
      result.y += y * s;
      return result;
    }, this);
  }

  public dot({ x, y }: IVector): number {
    return this.x * x + this.y * y;
  }

  public cross({ x, y }: IVector): number {
    return this.x * y - this.y * x;
  }
}
