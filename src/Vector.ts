export interface IVector {
  x: number;
  y: number;
}

export class Vector implements IVector {
  public static angleBetween(a: Vector, b: Vector): number {
    const lengthsProduct = a.getLength() * b.getLength();

    if (lengthsProduct === 0) {
      return 0;
    }

    return Math.acos(a.dot(b) / lengthsProduct);
  }

  public static angleBetweenSigned(a: Vector, b: Vector): number {
    return Vector.angleBetween(a, b) * a.crossSign(b);
  }

  public static distance(a: IVector, b: IVector): number {
    return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
  }

  public static fromArray([x, y]: number[]): Vector {
    return new Vector(x || 0, y || 0);
  }

  public static fromNormal({ x, y }: IVector): Vector {
    return new Vector(-y, x);
  }

  public static fromPolar(length: number, angle: number): Vector {
    return new Vector(length, 0).setAngle(angle);
  }

  public static fromRandom() {
    return new Vector(1, 0).randomizeAngle();
  }

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

  public addLength(length: number): Vector {
    const originalLength = this.getLength();

    const newLength = Math.max(0, originalLength + length);
    return this.setLength(newLength);
  }

  public addX(x: number): Vector {
    this.x += x;
    return this;
  }

  public addY(y: number): Vector {
    this.y += y;
    return this;
  }

  public alignWith(vector: Vector): Vector {
    return this.setAngle(vector.getAngle());
  }

  public clone(): Vector {
    return new Vector(this.x, this.y);
  }

  public copy({ x, y }: IVector): Vector {
    this.x = x;
    this.y = y;
    return this;
  }

  public cross({ x, y }: IVector): number {
    return this.x * y - this.y * x;
  }

  public crossSign(vector: Vector): number {
    return this.cross(vector) >= 0 ? 1 : -1;
  }

  public dot({ x, y }: IVector): number {
    return this.x * x + this.y * y;
  }

  public getAngle(): number {
    return (this.x < 0 ? Math.PI : 0) + Math.atan(this.y / this.x);
  }

  public getLength(): number {
    return this.getLengthSq() ** 0.5;
  }

  public getLengthSq(): number {
    return (this.x ** 2 + this.y ** 2);
  }

  public isEqual({ x, y }: IVector): boolean {
    return this.x === x && this.y === y;
  }

  public lerpAlignWith(rotation: number, vector: Vector): Vector {
    if (this.getAngle() === vector.getAngle()) {
      return this;
    }

    const originalSign = this.crossSign(vector);
    this.rotate(rotation * originalSign);
    const newSign = this.crossSign(vector);
    return originalSign !== newSign ? this.alignWith(vector) : this;
  }

  public mirror(): Vector {
    return this.scale(-1);
  }

  public normalize(): Vector {
    const length = this.getLength();
    if (length === 0) {
      return this;
    } else {
      return this.scale(1 / length);
    }
  }

  public randomizeAngle(maxRotation: number = Math.PI * 2): Vector {
    const rotation = (Math.random() - 0.5) * maxRotation;
    return this.rotate(rotation);
  }

  public rotate(radians: number): Vector {
    const length = this.getLength();
    const s = Math.sin(radians);
    const c = Math.cos(radians);
    const newX = this.x * c - this.y * s;
    const newY = this.x * s + this.y * c;
    return this.set(newX, newY).setLength(length);
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

  public set(x: number, y: number): Vector {
    this.x = x;
    this.y = y;
    return this;
  }

  public setAngle(radians: number): Vector {
    const length = this.getLength();
    const newX = Math.cos(radians);
    const newY = Math.sin(radians);
    return this.set(newX, newY).scale(length);
  }

  public setLength(length: number): Vector {
    return this.normalize().scale(length);
  }

  public setX(x: number): Vector {
    this.x = x;
    return this;
  }

  public setY(y: number): Vector {
    this.y = y;
    return this;
  }

  public subtract(...vectors: IVector[]): Vector {
    return vectors.reduce((result: Vector, { x, y }: IVector) => {
      result.x -= x;
      result.y -= y;
      return result;
    }, this);
  }

  public zero(): Vector {
    return this.set(0, 0);
  }
}
