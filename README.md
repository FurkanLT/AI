# AI Geometry Toolkit

A small **TypeScript portfolio exercise** for geometric calculations commonly used with 2D landmark data.

This repository is intentionally public-safe: it contains no production code, credentials, customer data or proprietary project logic.

## What it demonstrates

- Euclidean distance between landmarks
- distance normalization
- point mirroring across a vertical axis
- angle calculation from three points
- symmetry error / symmetry score
- lightweight TypeScript tests

The project is designed as a focused coding sample for practicing **TypeScript, geometry-oriented code, validation and testable utility design**.

## Run

```bash
npm install
npm test
npm run demo
```

## Example

```ts
import { distance, angleDegrees, symmetryScore } from "./src/geometry";

const leftEye = { x: 30, y: 40 };
const rightEye = { x: 70, y: 40 };

console.log(distance(leftEye, rightEye));
console.log(symmetryScore(leftEye, rightEye, 50, 40));
```

## Scope

This is a geometric demonstration only. It does **not** perform identity recognition, biometric identification or production facial analysis.
