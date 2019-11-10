export default class Vector {
  public x: number = 0;
  public y: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add({ x, y }: Vector): Vector {
    this.x += x;
    this.y += y;
    return this;
  }
}
