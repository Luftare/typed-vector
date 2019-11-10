import Vector from '../src/Vector';

function v(x: number, y: number): { x: number, y: number } {
  return { x, y };
}

describe('Vector methods', () => {
  it('add', () => {
    const a = new Vector(5, 4);
    const b = new Vector(6, 2);

    const returnValue = a.add(b);

    expect(a).toEqual(v(11, 6));
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
  })
});