export interface Point {
  x: number;
  y: number;
}

export default class Vector implements Point {
  public x: number = 0;
  public y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(...vectors: Point[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: Point) => {
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

  public subtract(...vectors: Point[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: Point) => {
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

  public scaledAdd(s: number, ...vectors: Point[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: Point) => {
      result.x += x * s;
      result.y += y * s;
      return result;
    }, this);
  }

  public dot({ x, y }: Point): number {
    return this.x * x + this.y * y;
  }

  public cross({ x, y }: Point): number {
    return this.x * y - this.y * x;
  }
}
