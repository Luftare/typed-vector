export interface IVector {
  x: number;
  y: number;
}

export class Vector implements IVector {
  static fromPolar(length: number, angle: number): Vector {
    return new Vector(length, 0).setAngle(angle);
  }

  static fromArray([x, y]: number[]): Vector {
    return new Vector(x || 0, y || 0);
  }

  static distance(a: IVector, b: IVector): number {
    return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
  }

  static fromRandom() {
    return new Vector(1, 0).randomizeAngle();
  }

  public x: number = 0;
  public y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public isEqual({ x, y }: IVector): boolean {
    return this.x === x && this.y === y;
  }

  public getLengthSq(): number {
    return (this.x ** 2 + this.y ** 2);
  }

  public getLength(): number {
    return this.getLengthSq() ** 0.5;
  }

  public setLength(length: number): Vector {
    return this.normalize().scale(length);
  }

  public getAngle(): number {
    return (this.x < 0 ? Math.PI : 0) + Math.atan(this.y / this.x);
  }

  public setAngle(radians: number): Vector {
    const length = this.getLength();
    const newX = Math.cos(radians);
    const newY = Math.sin(radians);
    return this.set(newX, newY).scale(length);
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

  public addLength(length: number): Vector {
    const originalLength = this.getLength();

    const newLength = Math.max(0, originalLength + length);
    return this.setLength(newLength);
  }

  public scale(multiplier: number): Vector {
    this.x *= multiplier;
    this.y *= multiplier;
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

  public rotate(radians: number): Vector {
    const length = this.getLength();
    const s = Math.sin(radians);
    const c = Math.cos(radians);
    const newX = this.x * c - this.y * s;
    const newY = this.x * s + this.y * c;
    return this.set(newX, newY).setLength(length);
  }

  public alignWith(vector: Vector): Vector {
    return this.setAngle(vector.getAngle());
  }

  public randomizeAngle(maxRotation: number = Math.PI * 2): Vector {
    const rotation = (Math.random() - 0.5) * maxRotation;
    return this.rotate(rotation);
  }
}
