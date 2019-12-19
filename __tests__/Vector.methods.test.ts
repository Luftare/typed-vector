import { Vector, IVector } from '../src/Vector';

function v(x: number, y: number): { x: number, y: number } {
  return { x, y };
}

function vectorIs(vector: IVector, x: number, y: number) {
  expect(vector.x).toBeCloseTo(x, 5);
  expect(vector.y).toBeCloseTo(y, 5);
}

describe('Vector methods', () => {
  it('getLength', () => {
    const vector = new Vector(5, 4);

    expect(vector.getLength()).toBeCloseTo(6.40312423, 5);
  });

  it('getAngle', () => {
    const vector = new Vector(5, 4);

    expect(vector.getAngle()).toBeCloseTo(0.67474094, 5);
  });

  it('add', () => {
    const a = new Vector(5, 4);
    const b = new Vector(6, 2);

    const returnValue = a.add(b);

    expect(a).toEqual(v(11, 6));
    expect(returnValue).toBe(a);
  });

  it('add, multiple vectors', () => {
    const a = new Vector(5, 4);
    const b = new Vector(1, 1);
    const c = new Vector(2, 2);

    const returnValue = a.add(b, c);

    expect(a).toEqual(v(8, 7));
    expect(returnValue).toBe(a);
  });

  it('addX', () => {
    const vector = new Vector(1, 2);

    const returnValue = vector.addX(5);

    expect(vector).toEqual(v(6, 2));
    expect(returnValue).toBe(vector);
  });

  it('addY', () => {
    const vector = new Vector(1, 2);

    const returnValue = vector.addY(5);

    expect(vector).toEqual(v(1, 7));
    expect(returnValue).toBe(vector);
  });

  it('subtract', () => {
    const a = new Vector(5, 4);
    const b = new Vector(6, 2);

    const returnValue = a.subtract(b);

    expect(a).toEqual(v(-1, 2));
    expect(returnValue).toBe(a);
  });

  it('subtract, multiple vectors', () => {
    const a = new Vector(5, 4);
    const b = new Vector(1, 1);
    const c = new Vector(2, 2);

    const returnValue = a.subtract(b, c);

    expect(a).toEqual(v(2, 1));
    expect(returnValue).toBe(a);
  });

  it('scale', () => {
    const vector = new Vector(1, 3);

    const returnValue = vector.scale(5);

    expect(vector).toEqual(v(5, 15));
    expect(returnValue).toBe(vector);
  });

  it('scaledAdd', () => {
    const a = new Vector(1, 1);
    const b = new Vector(3, 2);
    const multiplier = 2;

    const returnValue = a.scaledAdd(multiplier, b);

    expect(a).toEqual(v(7, 5));
    expect(b).toEqual(v(3, 2));
    expect(returnValue).toBe(a);
  });

  it('scaledAdd, multiple vectors', () => {
    const a = new Vector(1, 1);
    const b = new Vector(1, 1);
    const c = new Vector(2, 2);
    const multiplier = 2;

    const returnValue = a.scaledAdd(multiplier, b, c);

    vectorIs(a, 7, 7);
    vectorIs(b, 1, 1);
    vectorIs(c, 2, 2);
    expect(returnValue).toBe(a);
  });

  it('normalize', () => {
    const vector = new Vector(10, 5);

    vector.normalize();

    vectorIs(vector, 0.894427190, 0.4472135);
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