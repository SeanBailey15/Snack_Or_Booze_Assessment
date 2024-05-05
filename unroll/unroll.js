function unroll(matrix, arr = []) {
  let unrolled = arr;

  if (matrix.length === 0 && arr.length === 0) {
    throw new Error("Cannot unroll an empty matrix");
  }

  if (matrix.length === 0) return unrolled;

  unrolled.push(...matrix.shift());

  if (matrix.length === 0) return unrolled;

  unrolled.push(...matrix.map((arr) => arr.pop()));

  if (matrix.length === 0) return unrolled;

  unrolled.push(...matrix.pop().reverse());

  if (matrix.length === 0) return unrolled;

  unrolled.push(...matrix.map((arr) => arr.shift()).reverse());

  return unroll(matrix, unrolled);
}

// Check if the script is being run from the command line
if (require.main === module) {
  let matrix = JSON.parse(process.argv[2]);
  console.log(unroll(matrix));
}

module.exports = unroll;

/* When passing string character matrices into the command line, be sure to use quotes
    correctly, as in the following example:

    node unroll.js '[["a", "b", "c"],["d", "e", "f"],["g", "h", "i"]]'

    To pass numbers only, quotes are unnecessary:

    node unroll.js [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

    To pass a mix of strings and numbers:

    node unroll.js '[[1,"b",3,"d"],[5,"f",7,"h"],[9,"j",11,"l"],[13,"n",15,"p"]]'
*/
