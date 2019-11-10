# typed-vector

It's a 2d vector library written in typescript.

## API

### Properties

#### x: number

#### y: number

### Constructors

#### Vector()
`````ts
const vector = new Vector(); // x: 0, y: 0
`````
#### Vector(number, number)
`````ts
const vector = new Vector(1, 2);
`````

### Methods

#### .add(Vector): Vector
Mutates self by adding another vector.
`````ts
const a = new Vector(1, 2);
const b = new Vector(5, 5);
a.add(b); // x: 6, y: 7
`````