const test = require('tape');
const i = require('../javascript/algorithms/insertionSort');
const s = require('../javascript/algorithms/selectionSort');

test('A passing test', (assert) => {
  assert.pass('This test will pass');
  assert.end();
});

test('Selection sort should return empty array when an empty array is passed in.', (assert) => {
  const actualType = Array.isArray(s.selectionSort([]));
  const expectedType = true;

  const actualLength = s.selectionSort([]).length;
  const expectedLength = 0;

  assert.equal(actualType, expectedType, 'Selection sort should return an array');
  assert.equal(actualLength, expectedLength, 'Selection sort should have length of 0');
  assert.end();
});
