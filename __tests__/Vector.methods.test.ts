import { Vector, IVector } from '../src/Vector';

const PRECISENESS = 5;

function expectVector(vector: IVector, x: number, y: number) {
  expect(vector.x).toBeCloseTo(x, PRECISENESS);
  expect(vector.y).toBeCloseTo(y, PRECISENESS);
}

describe('Vector methods', () => {
  it('set', () => {
    const vector = new Vector(5, 4);

    vector.set(1, 2);

    expectVector(vector, 1, 2);
  });

  it('copy', () => {
    const vector = new Vector(5, 4);

    vector.copy({ x: 7, y: 8 });

    expectVector(vector, 7, 8);
  });

  it('clone', () => {
    const a = new Vector(5, 4);

    const b = a.clone();

    expectVector(b, 5, 4);
    expect(a).toEqual(b);
    expect(a).not.toBe(b);
  });

  it('getLength', () => {
    const vector = new Vector(5, 4);

    expect(vector.getLength()).toBeCloseTo(6.40312423, PRECISENESS);
  });

  it('getLengthSq', () => {
    const vector = new Vector(5, 4);

    expect(vector.getLengthSq()).toBe(41);
  });

  it('getAngle', () => {
    const vector = new Vector(5, 4);

    expect(vector.getAngle()).toBeCloseTo(0.67474094, PRECISENESS);
  });

  it('add', () => {
    const a = new Vector(5, 4);
    const b = new Vector(6, 2);

    const returnValue = a.add(b);

    expectVector(a, 11, 6);
    expect(returnValue).toBe(a);
  });

  it('add, multiple vectors', () => {
    const a = new Vector(5, 4);
    const b = new Vector(1, 1);
    const c = new Vector(2, 2);

    const returnValue = a.add(b, c);

    expectVector(a, 8, 7);
    expect(returnValue).toBe(a);
  });

  it('setX', () => {
    const vector = new Vector(1, 2);

    const returnValue = vector.setX(5);

    expectVector(vector, 5, 2);
    expect(returnValue).toBe(vector);
  });

  it('setY', () => {
    const vector = new Vector(1, 2);

    const returnValue = vector.setY(5);

    expectVector(vector, 1, 5);
    expect(returnValue).toBe(vector);
  });

  it('addX', () => {
    const vector = new Vector(1, 2);

    const returnValue = vector.addX(5);

    expectVector(vector, 6, 2);
    expect(returnValue).toBe(vector);
  });

  it('addY', () => {
    const vector = new Vector(1, 2);

    const returnValue = vector.addY(5);

    expectVector(vector, 1, 7);
    expect(returnValue).toBe(vector);
  });

  it('subtract', () => {
    const a = new Vector(5, 4);
    const b = new Vector(6, 2);

    const returnValue = a.subtract(b);

    expectVector(a, -1, 2);
    expect(returnValue).toBe(a);
  });

  it('subtract, multiple vectors', () => {
    const a = new Vector(5, 4);
    const b = new Vector(1, 1);
    const c = new Vector(2, 2);

    const returnValue = a.subtract(b, c);

    expectVector(a, 2, 1);
    expect(returnValue).toBe(a);
  });

  it('scale', () => {
    const vector = new Vector(1, 3);

    const returnValue = vector.scale(5);

    expectVector(vector, 5, 15);
    expect(returnValue).toBe(vector);
  });

  it('scaledAdd', () => {
    const a = new Vector(1, 1);
    const b = new Vector(3, 2);
    const multiplier = 2;

    const returnValue = a.scaledAdd(multiplier, b);

    expectVector(a, 7, 5);
    expectVector(b, 3, 2);
    expect(returnValue).toBe(a);
  });

  it('scaledAdd, multiple vectors', () => {
    const a = new Vector(1, 1);
    const b = new Vector(1, 1);
    const c = new Vector(2, 2);
    const multiplier = 2;

    const returnValue = a.scaledAdd(multiplier, b, c);

    expectVector(a, 7, 7);
    expectVector(b, 1, 1);
    expectVector(c, 2, 2);
    expect(returnValue).toBe(a);
  });

  it('normalize', () => {
    const vector = new Vector(10, 5);

    vector.normalize();

    expectVector(vector, 0.894427190, 0.4472135);
  })

  it('dot', () => {
    const a = new Vector(5, 3);
    const b = new Vector(2, 4);

    const dot = a.dot(b);

    expect(dot).toEqual(22);
  });

  it('cross', () => {
    const a = new Vector(5, 3);
    const b = new Vector(2, 4);

    const cross = a.cross(b);

    expect(cross).toEqual(14);
  });
});