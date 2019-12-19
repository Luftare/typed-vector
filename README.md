# typed-vector

It's a 2d vector library written in typescript.

## How to use
This module exports a `Vector` class and `IVector` interface.
`````ts
import { Vector, IVector } from 'typed-vector';

const vector = new Vector(1, 2);
const vectorLike: IVector = { x: 5, y: 8 };

vector.add(vectorLike);
`````

## API

#### [IVector { x: number, y: number}](#interface)

#### [Vector(number, number)](#vector-n-n)
`````ts
const vector = new Vector(1, 2); // x: 1, y: 2
const other = new Vector(); // x: 0, y: 0
`````

### Methods

#### [add(...IVector[]): Vector](#vector-v)
Mutates self by adding other vector(s).
`````ts
const a = new Vector(1, 2);
const b = new Vector(5, 5);
a.add(b); // x: 6, y: 7
`````

#### [getLength(): number](#get-length)
Gets the magnitude of the vector.
`````ts
const vector = new Vector(5, 4);
vector.getLength(); // 6.40312423
`````

#### [getAngle(): number](#get-angle)
Gets the angle of the vector.
`````ts
const vector = new Vector(5, 4);
vector.getAngle(); // 0.67474094
`````

#### [addX(number): Vector](#addx)
Mutates self by adding x.
`````ts
const vector = new Vector(2, 5);
vector.addX(1); // x: 3, y: 5
`````

#### [addY(number): Vector](#addy)
Mutates self by adding y.
`````ts
const vector = new Vector(2, 5);
vector.addY(1); // x: 2, y: 6
`````

#### [subtract(...IVector[]): Vector](#subtract)
Mutates self by subtracting other vector(s).
`````ts
const a = new Vector(5, 4);
const b = new Vector(3, 2);
a.subtract(b); // x: 2, y: 2
`````

#### [scale(number): Vector](#scale)
Mutates self by multiplying x and y.
`````ts
const vector = new Vector(1, 2);
vector.scale(5); // x: 5, y: 10
`````

#### [scaledAdd(number, ...IVector[]): Vector](#scaledadd)
Mutates self by adding other vector multiplied by given multiplier.
`````ts
const a = new Vector(1, 1);
const b = new Vector(3, 3);
a.scaledAdd(2, b); // x: 7, y: 7
b; // x: 3, y: 3
`````

#### [dot(IVector): number](#dot)
A dot product of self and other vector.
`````ts
const a = new Vector(1, 2);
const b = new Vector(3, 4);
a.dot(b); // 11
`````

#### [cross(IVector): number](#cross)
A cross product of self and other vector.
`````ts
const a = new Vector(5, 3);
const b = new Vector(2, 4);
a.cross(b); // 14
`````