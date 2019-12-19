export interface IVector {
  x: number;
  y: number;
}

export class Vector implements IVector {
  public x: number = 0;
  public y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getLengthSq(): number {
    return (this.x ** 2 + this.y ** 2);
  }

  public getLength(): number {
    return this.getLengthSq() ** 0.5;
  }

  public getAngle(): number {
    return (this.x < 0 ? Math.PI : 0) + Math.atan(this.y / this.x);
  }

  public set(x: number, y: number): Vector {
    this.x = x;
    this.y = y;
    return this;
  }

  public setX(x: number): Vector {
    this.x = x;
    return this;
  }

  public setY(y: number): Vector {
    this.y = y;
    return this;
  }

  public copy({ x, y }: IVector): Vector {
    this.x = x;
    this.y = y;
    return this;
  }

  public clone(): Vector {
    return new Vector(this.x, this.y);
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

  public normalize(): Vector {
    const length = this.getLength();
    if (length === 0) {
      return this;
    } else {
      return this.scale(1 / length);
    }
  }

  public dot({ x, y }: IVector): number {
    return this.x * x + this.y * y;
  }

  public cross({ x, y }: IVector): number {
    return this.x * y - this.y * x;
  }
}
