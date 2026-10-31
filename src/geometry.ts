export type Point = Readonly<{
  x: number;
  y: number;
}>;

function assertFinitePoint(point: Point, name: string): void {
  if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) {
    throw new Error(`${name} must contain finite x/y coordinates`);
  }
}

export function distance(a: Point, b: Point): number {
  assertFinitePoint(a, "a");
  assertFinitePoint(b, "b");
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export function normalizedDistance(
  a: Point,
  b: Point,
  referenceLength: number,
): number {
  if (!Number.isFinite(referenceLength) || referenceLength <= 0) {
    throw new Error("referenceLength must be a positive finite number");
  }
  return distance(a, b) / referenceLength;
}

export function midpoint(a: Point, b: Point): Point {
  assertFinitePoint(a, "a");
  assertFinitePoint(b, "b");
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

export function mirrorAcrossVerticalAxis(point: Point, axisX: number): Point {
  assertFinitePoint(point, "point");
  if (!Number.isFinite(axisX)) {
    throw new Error("axisX must be finite");
  }
  return {
    x: 2 * axisX - point.x,
    y: point.y,
  };
}

export function angleDegrees(a: Point, vertex: Point, b: Point): number {
  assertFinitePoint(a, "a");
  assertFinitePoint(vertex, "vertex");
  assertFinitePoint(b, "b");

  const ax = a.x - vertex.x;
  const ay = a.y - vertex.y;
  const bx = b.x - vertex.x;
  const by = b.y - vertex.y;

  const magnitudeA = Math.hypot(ax, ay);
  const magnitudeB = Math.hypot(bx, by);

  if (magnitudeA === 0 || magnitudeB === 0) {
    throw new Error("angle is undefined when a point equals the vertex");
  }

  const cosine = (ax * bx + ay * by) / (magnitudeA * magnitudeB);
  const clamped = Math.max(-1, Math.min(1, cosine));
  return (Math.acos(clamped) * 180) / Math.PI;
}

export function symmetryError(
  left: Point,
  right: Point,
  axisX: number,
  referenceLength: number,
): number {
  const mirroredLeft = mirrorAcrossVerticalAxis(left, axisX);
  return normalizedDistance(mirroredLeft, right, referenceLength);
}

export function symmetryScore(
  left: Point,
  right: Point,
  axisX: number,
  referenceLength: number,
): number {
  const error = symmetryError(left, right, axisX, referenceLength);
  return Math.max(0, Math.min(1, 1 - error));
}
