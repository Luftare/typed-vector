import { Vector } from '../src/Vector';
import { expectVector, PRECISENESS } from './Vector.test';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.789;
global.Math = mockMath;

describe('Vector methods', () => {
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

  it('addLength', () => {
    expectVector(new Vector(10, 0).addLength(5), 15, 0);
    expectVector(new Vector(10, 0).addLength(-5), 5, 0);
    expectVector(new Vector(7, 3).addLength(-11), 0, 0);
    expectVector(new Vector(-3, 6).addLength(1), -3.447213, 6.894427);
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

  it('alignWith', () => {
    const a = new Vector(20, 4);
    const b = new Vector(1, -30);

    a.alignWith(b);

    expect(a.getAngle()).toBe(b.getAngle());
  });

  it('applyMaxLength', () => {
    expectVector(new Vector(5, 0).applyMaxLength(2), 2, 0);
    expectVector(new Vector(100, -100).applyMaxLength(10), 7.0710678, -7.0710678);
  });

  it('applyMinLength', () => {
    expectVector(new Vector(5, 0).applyMinLength(8), 8, 0);
  });

  it('clampLength', () => {
    expectVector(new Vector(100, 100).clampLength(5, 10), 7.0710678, 7.0710678)
    expectVector(new Vector(100, 100).clampLength(10, 5), 7.0710678, 7.0710678)
    expectVector(new Vector(0, 0).clampLength(2, 10), 0, 0);
    expectVector(new Vector(0, 1).clampLength(5, 5), 0, 5);
  });

  it('clone', () => {
    const a = new Vector(5, 4);

    const b = a.clone();

    expectVector(b, 5, 4);
    expect(a).toEqual(b);
    expect(a).not.toBe(b);
  });

  it('copy', () => {
    const vector = new Vector(5, 4);

    vector.copy({ x: 7, y: 8 });

    expectVector(vector, 7, 8);
  });

  it('cross', () => {
    const a = new Vector(5, 3);
    const b = new Vector(2, 4);

    const cross = a.cross(b);

    expect(cross).toEqual(14);
  });

  it('crossSign', () => {
    expect(new Vector(1, 0).crossSign(new Vector(0, 1))).toBe(1);
    expect(new Vector(1, 0).crossSign(new Vector(1, 0))).toBe(1);
    expect(new Vector(1, 0).crossSign(new Vector(-1, 0))).toBe(1);
    expect(new Vector(1, 0).crossSign(new Vector(0, -1))).toBe(-1);
    expect(new Vector(1, 0).crossSign(new Vector(-1, -0.01))).toBe(-1);
  });

  it('dot', () => {
    const a = new Vector(5, 3);
    const b = new Vector(2, 4);

    const dot = a.dot(b);

    expect(dot).toEqual(22);
  });

  it('getAngle', () => {
    const vector = new Vector(5, 4);

    expect(vector.getAngle()).toBeCloseTo(0.67474094, PRECISENESS);
  });

  it('getLength', () => {
    const vector = new Vector(5, 4);

    expect(vector.getLength()).toBeCloseTo(6.40312423, PRECISENESS);
  });

  it('getLengthSq', () => {
    const vector = new Vector(5, 4);

    expect(vector.getLengthSq()).toBe(41);
  });

  it('isEqual', () => {
    expect(new Vector(5, 4).isEqual(new Vector(3, 4))).toBe(false);
    expect(new Vector(5, 4).isEqual(new Vector(4, 5))).toBe(false);
    expect(new Vector(5, 4).isEqual(new Vector(5, 4))).toBe(true);
  });

  it('lerpAlignWith', () => {
    const a = new Vector(10, 0);
    const b = new Vector(0, 10);

    a.lerpAlignWith(Math.PI * 0.25, b);

    expectVector(a, 7.0710678, 7.0710678);
  });

  it('lerpAlignWith, opposite direction', () => {
    const a = new Vector(-10, 0);
    const b = new Vector(0, 10);

    a.lerpAlignWith(Math.PI * 0.25, b);

    expectVector(a, -7.0710678, 7.0710678);
  });

  it('mirror', () => {
    expectVector(new Vector(5, 2).mirror(), -5, -2);
  });

  it('normalize', () => {
    const vector = new Vector(10, 5);

    vector.normalize();

    expectVector(vector, 0.894427190, 0.4472135);
  });

  it('randomizeAngle', () => {
    expectVector(new Vector(10, 0).randomizeAngle(), -2.42599, 9.70126596);
    expectVector(new Vector(10, 0).randomizeAngle(0.3), 9.962439, 0.86591421);
  });

  it('rotate', () => {
    expectVector(new Vector(10, 0).rotate(Math.PI), -10, 0);
    expectVector(new Vector(10, 0).rotate(Math.PI / 2), 0, 10);
    expectVector(new Vector(10, 0).rotate(-Math.PI / 2), 0, -10);
    expectVector(new Vector(10, 0).rotate(Math.PI * 2), 10, 0);
    expectVector(new Vector(3, 5).rotate(Math.PI * 3.1), -1.308084, -5.682333);
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

  it('set', () => {
    const vector = new Vector(5, 4);

    vector.set(1, 2);

    expectVector(vector, 1, 2);
  });

  it('setAngle', () => {
    expectVector(new Vector(0, 10).setAngle(0), 10, 0);
    expectVector(new Vector(3, 3).setAngle(0.3), 4.053149, 1.253786);
  });

  it('setLength', () => {
    const vector = new Vector(5, 4);

    vector.setLength(100);

    expectVector(vector, 78.08688, 62.469504);
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

  it('zero', () => {
    const a = new Vector(5, 4);

    a.zero();

    expectVector(a, 0, 0);
  })
});