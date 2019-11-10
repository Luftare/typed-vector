import Vector from '../src/Vector';

describe('Vector methods', () => {
  it('add', () => {
    const a = new Vector(5, 4);
    const b = new Vector(6, 2);

    const returnedVector = a.add(b);

    expect(a).toEqual({ x: 11, y: 6 });
    expect(returnedVector).toBe(a);
  })
});