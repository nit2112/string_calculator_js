const StringCalculator = require('../src/app');

describe('App.add', () => {
  test('returns 0 for empty string', () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  test('returns 1 for string 1', () => {
    expect(StringCalculator.add("1")).toBe(1);
  });

  test('returns 6 for string 1, 5', () => {
    expect(StringCalculator.add("1, 5")).toBe(6);
  });
});
