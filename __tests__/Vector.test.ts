import Vector from '../src/Vector';

describe('Vector', () => {
  it('Should exist', () => {
    expect(Vector).toBeDefined();
  });

  it('Can be initialized with scalars', () => {
    const vector = new Vector(5, 4);

    expect(vector).toEqual({ x: 5, y: 4 });
  })
});