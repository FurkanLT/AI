import {
  angleDegrees,
  distance,
  midpoint,
  symmetryScore,
} from "./geometry.js";

const leftEye = { x: 30, y: 40 };
const rightEye = { x: 70, y: 40 };
const nose = { x: 50, y: 60 };

console.log("Eye distance:", distance(leftEye, rightEye).toFixed(2));
console.log("Eye midpoint:", midpoint(leftEye, rightEye));
console.log(
  "Angle at nose:",
  angleDegrees(leftEye, nose, rightEye).toFixed(2),
);
console.log(
  "Symmetry score:",
  symmetryScore(leftEye, rightEye, 50, 40).toFixed(3),
);
