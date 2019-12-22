# typed-vector

It's a 2d vector library written in typescript. It includes lots of methods to simplify vector calculations in game development. It has zero dependencies and has unit tests.

## How to use
This module exports a `Vector` class and `IVector` interface.
`````ts
import { Vector, IVector } from 'typed-vector';

const vector = new Vector(1, 2);
const vectorLike: IVector = { x: 5, y: 8 };

vector.add(vectorLike);
`````

## API

#### [IVector](#interface)
`````ts
const vectorLike: IVector = { x: 5, y: 8 };
`````

#### [Vector(x: number, y: number)](#vector-n-n)
`````ts
const a = new Vector(1, 2); // x: 1, y: 2
const b = new Vector(); // x: 0, y: 0
`````

### Static methods

#### [Vector.angleBetween(a: Vector, b: Vector): number](#angle-between)
Computes the angle between vectors.
`````ts
const a = new Vector(-5, 4);
const b = new Vector(1, 4);

Vector.angleBetween(a, b); // 1.14103
`````

#### [Vector.angleBetweenSigned(a: Vector, b: Vector): number](#angle-between-signed)
Computes the angle between vectors with a sign.
`````ts
const a = new Vector(-5, 4);
const b = new Vector(1, 4);

Vector.angleBetweenSigned(a, b); // -1.14103
`````

#### [Vector.distance(a: IVector, b: IVector): number](#static-distance)
Computes the distance of two vector-likes.
`````ts
const a = Vector.distance({ x: -10, y: 0}, { x: 10, y: 0}); // 20
`````

#### [Vector.distanceSq(a: IVector, b: IVector): number](#static-distance-sq)
Computes the squared distance of two vector-likes.
`````ts
const a = Vector.distanceSq({ x: -1, y: 0}, { x: 1, y: 0}); // 4
`````

#### [Vector.distanceToSegment(coordinate: Vector, segmentStart: Vector, segmentEnd: Vector): number](#static-distance-sq)
Computes the distance of a coordinate to a segment defined by 2 coordinates.
`````ts
const segmentStart = new Vector(0, 0);
const segmentEnd = new Vector(5, 0);
const coordinate = new Vector(2, 7);

Vector.distanceToSegment(coordinate, segmentStart, segmentEnd); // 7
`````

#### [Vector.distanceToSegmentSq(coordinate: Vector, segmentStart: Vector, segmentEnd: Vector): number](#static-distance-sq)
Computes the squared distance of a coordinate to a segment defined by 2 coordinates.
`````ts
const segmentStart = new Vector(0, 0);
const segmentEnd = new Vector(5, 0);
const coordinate = new Vector(2, 7);

Vector.distanceToSegmentSq(coordinate, segmentStart, segmentEnd); // 49
`````

#### [Vector.fromArray([number, number]): Vector](#from-array)
Creates a vector from values provided as array.
`````ts
const a = Vector.fromArray([5, 6]); // x: 5, y: 6
`````

#### [Vector.fromCoordinate(vector: IVector): Vector](#from-coordinate)
Creates a vector from a coordinate.
`````ts
Vector.fromCoordinate({ x: 4, y: 5 }); // x: 4, y: 5
`````

#### [Vector.fromCoordinates(start: IVector, end: IVector): Vector](#from-coordinates)
Creates a vector from start and end coordinates.
`````ts
Vector.fromCoordinates({ x: 1, y: 1}, { x: 4, y: 5 }); // x: 3, y: 4
`````

#### [Vector.fromNormal(vector: IVector): Vector](#from-polar)
Creates a vector from other vector's normal.
`````ts
Vector.fromNormal({ x: 5, y: 4 }); // x: 4, y: 5
`````

#### [Vector.fromPolar(length: number, angle: number): Vector](#from-polar)
Creates a vector from polar coordinates. The angle is in radians.
`````ts
Vector.fromPolar(10, Math.PI); // x: -10, y: 0
`````

#### [Vector.fromRandom(): Vector](#from-random)
Creates a unit vector with random angle.
`````ts
Vector.fromRandom();
`````

### Methods

#### [add(a: IVector [, b: IVector] [, c: IVector]): self](#add)
Mutates self by adding other vector(s).
`````ts
const a = new Vector(1, 2);
const b = new Vector(5, 5);

a.add(b); // x: 6, y: 7
`````

#### [addLength(length: number): number](#add-length)
Increments or decrements the magnitude of the vector by given length. If negative value is passed the vector magnitude is shortened to a minimum of 0 length.
`````ts
new Vector(15, 0).addLength(20); // x: 35, y: 0
new Vector(0, 10).addLength(-20); // x: 0, y: 0
`````

#### [addX(x: number): self](#add-x)
Mutates self by adding x.
`````ts
new Vector(2, 5).addX(1); // x: 3, y: 5
`````

#### [addY(y: number): self](#add-y)
Mutates self by adding y.
`````ts
new Vector(2, 5).addY(1); // x: 2, y: 6
`````

#### [alignWith(vector: Vector): self](#align-with)
Rotates the vector to be aligned with other vector.
`````ts
const a = new Vector(20, 4);
const b = new Vector(1, -30);

a.alignWith(b); // x: 0.67949, y: -20.384
`````

#### [clampAngle(angle: number, maxDiff: number): self](#clamp-angle)
Clamps vectors angle to be within given diff. The diff is for both directions so `maxDiff` of `Math.PI` will effectively disable clamping effect.
`````ts
new Vector(1, 0)
  .rotate(0.2 + Math.PI * 2)
  .clampAngle(0, 0.1)
  .getAngle(); // 0.1
`````

#### [clampLength(a: number, b: number): self](#clamp-length)
Clamps vectors length to be between min and max lengths. The boundaries can be set in any order e.g. (min, max) and (max, min).
`````ts
new Vector(2, 0).clampLength(5, 10); // x: 5, y: 0
`````

#### [clone(): Vector](#clone)
Creates a new Vector with identical values.
`````ts
const a = new Vector(5, 4);
const b = a.clone();
a === b; // false
`````

#### [copy(vector: IVector): self](#copy)
Mutates self copying x and y from other vector-like.
`````ts
new Vector(5, 4).copy({ x: 2, y: 3 }); // x: 2, y: 3
`````

#### [cross(vector: IVector): number](#cross)
A cross product of self and other vector.
`````ts
const a = new Vector(5, 3);
const b = new Vector(2, 4);

a.cross(b); // 14
`````

#### [crossSign(vector: IVector): number](#cross-sign)
The sign of the cross product of self and other vector. Equal vector's sign is 1;
`````ts
const a = new Vector(1, 0);
const b = new Vector(0, 1);

a.crossSign(b); // 1
`````

#### [dot(vector: IVector): number](#dot)
A dot product of self and other vector.
`````ts
const a = new Vector(1, 2);
const b = new Vector(3, 4);

a.dot(b); // 11
`````

#### [getAngle(): number](#get-angle)
Gets the angle of the vector.
`````ts
new Vector(5, 4).getAngle(); // 0.67474094
`````

#### [getLength(): number](#get-length)
Gets the magnitude of the vector.
`````ts
new Vector(5, 4).getLength(); // 6.40312423
`````

#### [getLengthSq(): number](#get-length-sq)
Gets the magnitude of the vector squared.
`````ts
new Vector(1, 2).getLengthSq(); // 5
`````

#### [isEqual(vector: IVector): boolean](#is-equal)
Checks if given vector-like is equal.
`````ts
new Vector(20, 4).isEqual({ 20, 4 }); // true
new Vector(20, 4).isEqual({ 21, 4 }); // false
`````

#### [lerpAlignWith(rotation: number, vector: Vector): self](#lerp-align-with)
Rotates towards a given vector for a given increment angle. If increment angle is greter than the difference of the vectors' angles the vectors will be aligned.
`````ts
const a = Vector.fromPolar(10, 0.5);
const b = Vector.fromPolar(10, 1.5);

a.lerpAlignWidth(0.2, b).getAngle(); // 0.7
`````

#### [applyMaxLength(maxLength: number): self](#apply-max-length)
Limits the length of the vector.
`````ts
new Vector(-10, 0).applyMaxLength(2); // x: -2, y: 0
`````

#### [applyMinLength(minLength: number): self](#apply-min-length)
Makes vector to be minimum of given length. Zero vector will be ignored.
`````ts
new Vector(-1, 0).applyMixLength(3); // x: -3, y: 0
`````

#### [mirror(): self](#mirror)
Mirrors the vector.
`````ts
new Vector(5, 4).mirror(); // x: -5, y: -4
`````

#### [normalize(): self](#normalize)
Normalizes the vector i.e. sets the length to 1.
`````ts
new Vector(100, 53).normalize().getLength(); // 1
`````


#### [randomizeAngle(maxRotation?: number): self](#randomize-angle)
Randomizes the angle. The max range of randomization from current angle can be provided as an argument.
`````ts
new Vector(20, 4).randomizeAngle();
`````

#### [rotate(angle: number): self](#rotate)
Rotates vector by given radians.
`````ts
new Vector(10, 0).scale(Math.PI); // x: -10, y: 0
`````

#### [scale(multiplier: number): self](#scale)
Mutates self by multiplying x and y.
`````ts
new Vector(1, 2).scale(5); // x: 5, y: 10
`````

#### [scaledAdd(multiplier: number, ...vectors: IVector[]): self](#scaled-add)
Mutates self by adding other vector multiplied by given multiplier.
`````ts
const a = new Vector(1, 1);
const b = new Vector(3, 3);

a.scaledAdd(2, b); // x: 7, y: 7
`````

#### [set(x: number, y: number): self](#set)
Mutates self by setting x and y values.
`````ts
new Vector(5, 4).set(2, 3); // x: 2, y: 3
`````

#### [setAngle(): number](#set-angle)
Sets the angle of the vector.
`````ts
new Vector(15, 0).setAngle(Math.PI); // x: -15, y: 0
`````

#### [setLength(): number](#set-length)
Sets the magnitude of the vector.
`````ts
new Vector(15, 0).setLength(20); // x: 20, y: 0
`````

#### [setX(x: number): self](#set-x)
Sets x.
`````ts
new Vector(2, 5).setX(1); // x: 1, y: 5
`````

#### [setY(y: number): self](#set-y)
Sets y.
`````ts
new Vector(2, 5).addY(1); // x: 2, y: 1
`````

#### [subtract(a: IVector [, b: IVector] [, c: IVector]): self](#subtract)
Mutates self by subtracting other vector(s).
`````ts
const a = new Vector(5, 4);
const b = new Vector(3, 2);

a.subtract(b); // x: 2, y: 2
`````

#### [zero(): self](#zero)
Sets vector's length to 0.
`````ts
new Vector(5, 4).zero(); // x: 0, y: 0
`````