'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  return function adder(a) {
    if (a === undefined) {
      return 0;
    }

    let sum = a;

    return function inner(b) {
      if (b === undefined) {
        const currantSum = sum;

        sum = 0;

        return currantSum;
      }

      sum += b;

      return inner;
    };
  };
}
module.exports = makeInfinityAdder;
