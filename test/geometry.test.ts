import assert from "node:assert/strict";
import {
  angleDegrees,
  distance,
  midpoint,
  mirrorAcrossVerticalAxis,
  normalizedDistance,
  symmetryScore,
} from "../src/geometry.js";

assert.equal(distance({ x: 0, y: 0 }, { x: 3, y: 4 }), 5);
assert.equal(
  normalizedDistance({ x: 0, y: 0 }, { x: 3, y: 4 }, 10),
  0.5,
);
assert.deepEqual(midpoint({ x: 0, y: 0 }, { x: 10, y: 4 }), {
  x: 5,
  y: 2,
});
assert.deepEqual(mirrorAcrossVerticalAxis({ x: 30, y: 40 }, 50), {
  x: 70,
  y: 40,
});

const rightAngle = angleDegrees(
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
);
assert.ok(Math.abs(rightAngle - 90) < 1e-10);

assert.equal(
  symmetryScore({ x: 30, y: 40 }, { x: 70, y: 40 }, 50, 40),
  1,
);

assert.throws(
  () => normalizedDistance({ x: 0, y: 0 }, { x: 1, y: 1 }, 0),
  /positive finite number/,
);

console.log("All geometry tests passed.");
