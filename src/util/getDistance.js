/**
 * Function for getting the Euclidean distance between two points.
 *
 * @param {{ x: number, y: number }} p1 - The first point
 * @param {{ x: number, y: number }} p2 - The second point
 *
 * @returns {number} the Euclidean distance between two points.
 */
function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

export default getDistance;
