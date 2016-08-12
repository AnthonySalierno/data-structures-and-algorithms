const test = require('tape');
const factorial = require('../javascript/algorithms/recursion/factorial');
const palindrome = require('../javascript/algorithms/recursion/palindrome');
const insertion = require('../javascript/algorithms/sorting/insertionSort');
const selection = require('../javascript/algorithms/sorting/selectionSort');

test('A passing test', (assert) => {
  assert.pass('This test will pass');
  assert.end();
});

test('Factorial should return null when a negative value is passed in', (assert) => {
  const actual = factorial.factorial(-1);
  const expected = null;

  assert.equal(actual, expected, 'Factorial should return null');
  assert.end();
});

test('Factorial should return 1 when 0 is passed in', (assert) => {
  const actual = factorial.factorial(0);
  const expected = 1;

  assert.equal(actual, expected, 'Factorial should return 1');
  assert.end();
});

test('Factorial should return 1 when 1 is passed in', (assert) => {
  const actual = factorial.factorial(1);
  const expected = 1;

  assert.equal(actual, expected, 'Factorial should return 1');
  assert.end();
});

test('Factorial should return 120 when 5 is passed in', (assert) => {
  const actual = factorial.factorial(5);
  const expected = 120;

  assert.equal(actual, expected, 'Factorial should return 120');
  assert.end();
});

test('Palindrome should return true when empty string is passed in', (assert) => {
  const actual = palindrome.palindrome('');
  const expected = true;

  assert.equal(actual, expected, 'Palindrome should return true');
  assert.end();
});

test('Palindrome should return true when any string of length 1 is passed in', (assert) => {
  const actual = palindrome.palindrome('a');
  const expected = true;

  assert.equal(actual, expected, 'Palindrome should return true');
  assert.end();
});

test('Palindrome should return true when palindrome is passed in', (assert) => {
  const actual = palindrome.palindrome('racecar');
  const expected = true;

  assert.equal(actual, expected, 'Palindrome should return true');
  assert.end();
});

test('Palindrome should return false when palindrome is passed in', (assert) => {
  const actual = palindrome.palindrome('dog');
  const expected = false;

  assert.equal(actual, expected, 'Palindrome should return true');
  assert.end();
});

test('Selection sort should return empty array when an empty array is passed in.', (assert) => {
  const actualType = Array.isArray(selection.selectionSort([]));
  const expectedType = true;

  const actualLength = selection.selectionSort([]).length;
  const expectedLength = 0;

  assert.equal(actualType, expectedType, 'Selection sort should return an array');
  assert.equal(actualLength, expectedLength, 'Selection sort should have length of 0');
  assert.end();
});
