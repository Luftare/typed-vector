
import { Vector, IVector } from '../src/Vector';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.789;
global.Math = mockMath;

export const PRECISENESS = 5;

export function expectVector(vector: IVector, x: number, y: number) {
  expect(vector.x).toBeCloseTo(x, PRECISENESS);
  expect(vector.y).toBeCloseTo(y, PRECISENESS);
}

describe('Vector', () => {
  it('Can be initialized with scalars', () => {
    expectVector(new Vector(5, 4), 5, 4);
  });

  it('Can be initiated with an array', () => {
    expectVector(Vector.fromArray([1, 2]), 1, 2);
    expectVector(Vector.fromArray([]), 0, 0);
  });

  it('Can be initiated from polar coordinates', () => {
    expectVector(Vector.fromPolar(10, 0), 10, 0);
    expectVector(Vector.fromPolar(4, -0.1), 3.980016, -0.39933);
    expectVector(Vector.fromPolar(10, 32.123), 7.602662, 6.49611609);
  });

  it('Can create random vector', () => {
    expectVector(Vector.fromRandom(), -0.2425992, 0.970126596);
  });

  it('Can create vector from normal', () => {
    const a = new Vector(5, 4);

    expectVector(Vector.fromNormal(a), 4, 5);
    expectVector(Vector.fromNormal(a, true), -4, -5);
  });

  it('Can compute vector\'s distance', () => {
    const a = new Vector(5, 4);
    const b = new Vector(2, -6);

    const distance = Vector.distance(a, b);

    expect(distance).toBeCloseTo(10.440306, PRECISENESS);
  });
});