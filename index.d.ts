/**
 * Makes f(a,b,c) callable as f(a)(b)(c)
 * @param {Function} func
 * @returns {Function}
 * @example
 * function sum(a, b, c) {
 *   return a + b + c;
 * }
 *
 * let curriedSum = curry(sum);
 * alert( curriedSum(1, 2, 3) ); // 6, still callable normally
 * alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
 * alert( curriedSum(1)(2)(3) ); // 6, full currying
 */
export default function curry(func: () => any): () => void;
